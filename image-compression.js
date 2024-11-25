import express from "express";
import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3100;

app.use(express.json());

app.get("/", (req, res) =>
{
  res.sendFile(path.join(__dirname, "image-compression.html"));
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/convert", upload.array("images"), async (req, res) =>
{
  let { outputDir, quality } = req.body;

  if (!outputDir)
  {
    return res.status(400).json({ error: "Output directory is required." });
  }

  const isRelative = !path.isAbsolute(outputDir);
  if (isRelative)
  {
    outputDir = path.resolve(__dirname, outputDir);
  }

  if (!fs.existsSync(outputDir))
  {
    return res.status(400).json({ error: "Invalid output directory." });
  }

  const qualityInt = parseInt(quality, 10);
  if (isNaN(qualityInt) || qualityInt < 0 || qualityInt > 100)
  {
    return res.status(400).json({ error: "Quality must be an integer between 0 and 100." });
  }

  try
  {
    const convertedFiles = [];
    for (const file of req.files)
    {
      const avifTargetPath = path.join(outputDir, `${ path.parse(file.originalname).name }.avif`);

      await sharp(file.buffer)
        .toFormat("avif", { quality: qualityInt })
        .toFile(avifTargetPath);

      convertedFiles.push(avifTargetPath);
    }

    res.status(200).json({ message: "Images converted successfully.", files: convertedFiles });
  } catch (err)
  {
    res.status(500).json({ error: "Image conversion failed.", details: err.message });
  }
});

app.listen(port, () =>
{
  console.log(`Server running on http://localhost:${ port }`);
  console.log("Turn off this window if you are done");
});

function openBrowser(url)
{
  if (process.platform === "darwin") exec(`open ${ url }`);
  else if (process.platform === "win32") exec(`start ${ url }`);
  else exec(`xdg-open ${ url }`);
}

openBrowser(`http://localhost:${ port }`);
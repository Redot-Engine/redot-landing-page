import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const ExpectedQuality = Number(process.argv[4]);

if (isNaN(ExpectedQuality))
{
  console.error("Please provide a valid quality for the image.");
  process.exit(1);
}

if (!sourceDir || !targetDir)
{
  console.error("Please provide both source and target directories as arguments.");
  process.exit(1);
}

if (fs.existsSync(targetDir))
{
  fs.removeSync(targetDir);
  console.log(`Old directory removed: ${ targetDir }`);
}

const allowedFormats = [".png", ".jpg", ".jpeg", ".webp", ".tiff", ".bmp"];

async function convertAndCopyImage(imagePath, targetPath)
{
  const ext = path.extname(imagePath).toLowerCase();

  if (ext === ".avif" || ext === ".svg" || ext === ".gif" || ext === ".ico")
  {
    await fs.copy(imagePath, targetPath);
    console.log(`Copied: ${ targetPath }`);
  }
  else if (allowedFormats.includes(ext))
  {
    await sharp(imagePath)
      .toFormat("avif", { quality: ExpectedQuality })
      .toFile(targetPath.replace(path.extname(targetPath), ".avif"));
    console.log(`Converted and copied: ${ targetPath.replace(path.extname(targetPath), ".avif") }`);
  }
}

async function processDirectory(dir)
{
  const files = fs.readdirSync(dir);

  for (const file of files)
  {
    const fullPath = path.join(dir, file);
    const targetPath = path.join(targetDir, path.relative(sourceDir, fullPath));

    if (fs.lstatSync(fullPath).isDirectory())
    {
      await processDirectory(fullPath);
    } else
    {
      const targetDirName = path.dirname(targetPath);
      if (!fs.existsSync(targetDirName))
      {
        fs.mkdirSync(targetDirName, { recursive: true });
      }

      await convertAndCopyImage(fullPath, targetPath);
    }
  }
}

processDirectory(sourceDir).catch(console.error);
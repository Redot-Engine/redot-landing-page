import { exec } from "child_process";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const supportedFormats = [".png", ".jpg", ".jpeg", ".webp", ".tiff", ".bmp"];

function getGitChanges()
{
    return new Promise((resolve, reject) =>
    {
        exec("git diff --name-only --diff-filter=AM", (err, stdout, stderr) =>
        {
            if (err)
            {
                return reject(`Error getting git changes: ${ stderr }`);
            }
            const files = stdout.split("\n").filter(file => file.trim() !== "");
            resolve(files);
        });
    });
}

async function convertImageToAvif(inputPath)
{
    try
    {
        const outputPath = path.format({
            dir: path.dirname(inputPath),
            name: path.parse(inputPath).name,
            ext: ".avif",
        });

        await sharp(inputPath)
            .toFormat("avif", { quality: 70 })
            .toFile(outputPath);

        console.log(`Converted ${ inputPath } to ${ outputPath }`);

        fs.unlinkSync(inputPath);
        console.log(`Removed original image: ${ inputPath }`);
    }
    catch (err)
    {
        console.error(`Error converting ${ inputPath }: ${ err.message }`);
    }
}

async function processGitChanges()
{
    try
    {
        const changes = await getGitChanges();
        console.log("Changed files:", changes);

        for (const file of changes)
        {
            const ext = path.extname(file).toLowerCase();

            if (supportedFormats.includes(ext))
            {
                const filePath = path.resolve(file);

                if (fs.existsSync(filePath))
                {
                    await convertImageToAvif(filePath);
                } else
                {
                    console.error(`File not found: ${ filePath }`);
                }
            }
        }
    } catch (err)
    {
        console.error("Error processing git changes:", err.message);
    }
}

processGitChanges();
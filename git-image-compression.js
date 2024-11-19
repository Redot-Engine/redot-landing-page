import { exec } from "child_process";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const supportedFormats = [".png", ".jpg", ".jpeg", ".webp", ".tiff", ".bmp"];

function getGitChanges()
{
    return new Promise((resolve, reject) =>
    {
        exec("git status --porcelain", (err, stdout, stderr) =>
        {
            if (err)
            {
                return reject(`Error getting git status: ${ stderr }`);
            }

            const files = stdout.split("\n")
                .filter(line =>
                {
                    const fileStatus = line.trim().split(" ")[0];
                    const filePath = line.slice(3).trim().replace(/['"]/g, "");
                    const ext = path.extname(filePath).toLowerCase();

                    return (fileStatus === "M" || fileStatus === "A" || fileStatus === "??") && supportedFormats.includes(ext);
                })
                .map(line => line.slice(3).trim().replace(/['"]/g, ""));

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
        console.log("Images to process:", changes);

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

        await new Promise((resolve, reject) =>
        {
            exec("git add .", (err, stdout, stderr) =>
            {
                if (err)
                {
                    return reject(`Error staging changes: ${ stderr }`);
                }
                console.log("Staged converted files.");
                resolve(stdout);
            });
        });

        const hasChanges = await new Promise((resolve) =>
        {
            exec("git diff --cached --quiet", (err) =>
            {
                if (err)
                {
                    resolve(true);
                }
                else
                {
                    resolve(false);
                }
            });
        });

        if (hasChanges)
        {
            await new Promise((resolve, reject) =>
            {
                exec("git commit -m \"Convert images to AVIF\"", (err, stdout, stderr) =>
                {
                    if (err)
                    {
                        return reject(`Error committing changes: ${ stderr }`);
                    }
                    console.log("Committed converted files.");
                    resolve(stdout);
                });
            });
        } else
        {
            console.log("No changes to commit.");
        }
    } catch (err)
    {
        console.error("Error processing git changes:", err.message);
        process.exit(1);
    }
}

processGitChanges();
export async function onRequest(context)
{
    if (!context.params.mirrorlist.includes(".json"))
    {
        return new Response(JSON.stringify({ error: "Bad request: Expected .json format" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const version = context.params.mirrorlist.replace(".json", "");
    const regex = /^(\d+)\.(\d+)(\.(\d+))?\.(\w+)(\.(\d+))?(\.mono)?$/;
    const match = version.match(regex);

    if (!match)
    {
        return new Response(JSON.stringify({ error: "Bad request: Invalid version format" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const major = match[1];
    const minor = match[2];
    const patch = match[4] || "0";
    const status = match[5];
    const statusVersion = match[7] ? `.${ match[7] }` : "";
    const monoTag = match[8] ? "_mono" : "";

    const downloadPathVersion = `${ major }.${ minor }${ patch !== "0" ? `.${ patch }` : "" }-${ status }${ statusVersion }`;
    const templateVersion = `${ major }.${ minor }${ patch !== "0" ? `.${ patch }` : "" }-${ status }${ statusVersion }${ monoTag }`;

    const mirrorlist = {
        mirrors: [
            {
                name: "Official GitHub Releases mirror",
                url: `https://github.com/Redot-Engine/redot-engine/releases/download/redot-${ downloadPathVersion }/Redot_v${ templateVersion }_export_templates.tpz`,
            },
        ],
    };

    return new Response(JSON.stringify(mirrorlist), {
        headers: { "Content-Type": "application/json" },
    });
}
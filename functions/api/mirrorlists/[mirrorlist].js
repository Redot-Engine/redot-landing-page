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

    const downloadPathVersion = version.replace(".mono", "");

    const mirrorlist = {
        mirrors: [
            {
                name: "Official GitHub Releases mirror",
                url: `https://github.com/Redot-Engine/redot-engine/releases/download/redot-${ downloadPathVersion }/Redot_v${ version }_export_templates.tpz`,
            },
        ],
    };

    return new Response(JSON.stringify(mirrorlist), {
        headers: { "Content-Type": "application/json" },
    });
}
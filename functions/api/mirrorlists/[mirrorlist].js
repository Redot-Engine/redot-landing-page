export async function onRequest(context)
{
    const version = context.params.mirrorlist.replace('.json', '');
    const downloadPathVersion = version.replace(/\./g, '-');
    const mirrorlist = {
        mirrors: [
            {
                name: "Official GitHub Releases mirror",
                url: `https://github.com/Redot-Engine/redot-engine/releases/download/redot-${ downloadPathVersion }/Redot_v${ version }_export_templates.tpz`
            }
        ]
    };

    return new Response(JSON.stringify(mirrorlist), {
        headers: { "Content-Type": "application/json" },
    });
}
export async function onRequest(context)
{
    const version = context.params.mirrorlist.replace('.json', '');
    const mirrorlist = {
        mirrors: [
            {
                name: "Official GitHub Releases mirror",
                url: `https://github.com/Redot-Engine/redot-engine/releases/download/redot-${ version }/Redot_v${ version.replace(/-/g, '_') }_export_templates.tpz`
            }
        ]
    };

    return new Response(JSON.stringify(mirrorlist), {
        headers: { "Content-Type": "application/json" },
    });
}
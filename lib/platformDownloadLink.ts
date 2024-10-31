export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-beta.2/Redot_v4.3-beta.2_win64.exe.zip",
    linux: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-beta.2/Redot_v4.3-beta.2_linux.x86_64.zip",
    android: "https://download.redotengine.org/release/4.4/android-editor.zip",
    mac: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-beta.2/Redot_v4.3-beta.2_macos.universal.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

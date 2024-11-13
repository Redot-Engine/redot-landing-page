export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.2/Redot_v4.3-rc.2_win64.exe.zip",
    linux: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.2/Redot_v4.3-rc.2_linux.x86_64.zip",
    android: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.2/Redot_v4.3-rc.2_android_editor.apk",
    mac: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.2/Redot_v4.3-rc.2_macos.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

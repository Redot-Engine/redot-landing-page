export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.1/Redot_v4.3-rc.1_win64.exe.zip",
    linux: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.1/Redot_v4.3-rc.1_linux.x86_64.zip",
    android: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.1/Redot_v4.3-rc.1_android_editor.apk",
    mac: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.1/Redot_v4.3-rc.1_macos.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

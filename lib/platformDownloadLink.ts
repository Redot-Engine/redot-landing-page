export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_win64.exe.zip",
    linux: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_linux.x86_64.zip",
    android: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_android_editor.apk",
    mac: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_macos.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

export const getMonoPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_mono_win64.zip",
    linux: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_mono_linux_x86_64.zip",
    mac: "https://github.com/Redot-Engine/redot-engine/releases/download/redot-4.3-rc.4/Redot_v4.3-rc.4_mono_macos.zip",
  };

  return (
      downloadLinks[platform] ||
      "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

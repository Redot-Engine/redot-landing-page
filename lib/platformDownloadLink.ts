export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows: "https://download.redotengine.org/release/4.3/Redot_v4.3-beta.1_win64.exe.zip",
    linux: "https://download.redotengine.org/release/4.3/Redot_v4.3-beta.1_linux.x86_64.zip",
    android: "https://download.redotengine.org/release/4.4/android-editor.zip",
    mac: "https://download.redotengine.org/release/4.3/Redot_v4.3-beta.1_macos.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

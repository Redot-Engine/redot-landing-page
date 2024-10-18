export const getPlatformDownloadLink = (platform: string): string => {
  const downloadLinks: { [key: string]: string } = {
    windows:
      "https://download.redotengine.org/release/4.4/redot-windowsx64.zip",
    linux: "https://download.redotengine.org/release/4.4/redot-linuxbsd.zip",
    android: "https://download.redotengine.org/release/4.4/android-editor.zip",
  };

  return (
    downloadLinks[platform] ||
    "https://github.com/Redot-Engine/redot-engine/releases"
  );
};

export type GalleryImage = {
  src: string;
  filename: string;
  caption: string;
  alt: string;
};

const rawGalleryImages = import.meta.glob(
  "/content/gallery/*.{png,jpg,jpeg,webp,avif,gif,svg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

const galleryImages = Object.entries(rawGalleryImages)
  .map(([filePath, src]) => {
    const filenameWithExt = decodeURIComponent(filePath.split("/").pop() ?? "");
    const filename = filenameWithExt.replace(/\.[^.]+$/, "");

    return {
      src,
      filename,
      caption: filename,
      alt: filename,
    };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: "base" }));

export function getGalleryImages(): GalleryImage[] {
  return galleryImages;
}

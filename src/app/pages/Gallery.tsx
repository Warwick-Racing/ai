import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getGalleryImages } from "@/app/lib/gallery";
import PageHeader from "@/app/components/PageHeader";

export default function Gallery() {
  const galleryImages = getGalleryImages();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isGalleryOpen = selectedIndex !== null;
  const hasImages = galleryImages.length > 0;

  const closeGallery = () => setSelectedIndex(null);

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }
      return (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }
      return (currentIndex + 1) % galleryImages.length;
    });
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <div className="pt-20">
      <PageHeader
        title="Photo Gallery"
        description="A visual archive of testing, engineering progress, and race preparation."
        containerClassName="max-w-7xl"
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {hasImages ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group text-left bg-zinc-900 border border-zinc-800 hover:border-green-500 transition-colors overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-300">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 p-8 text-gray-300">
              No images found. Upload photos to <code>content/gallery/</code>. The filename will be used as the description.
            </div>
          )}
        </div>
      </section>

      {hasImages && isGalleryOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Team photo gallery"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-700"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 text-white hover:text-green-500 transition-colors"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 border border-zinc-700 text-white hover:text-green-500 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 border border-zinc-700 text-white hover:text-green-500 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="px-6 py-4 border-t border-zinc-800">
              <p className="text-gray-300">{galleryImages[selectedIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

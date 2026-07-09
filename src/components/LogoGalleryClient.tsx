"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { LogoImage } from "@/components/LogoGallery";

export default function LogoGalleryClient({ images }: { images: LogoImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  const closeLightbox = () => {
    setIsVisible(false);
    setSelectedIndex(null);
  };

  const showPreviousImage = () => {
    if (selectedIndex === null || images.length === 0) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (selectedIndex === null || images.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    setIsVisible(false);
    const animationFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [selectedImage]);

  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group overflow-hidden rounded-3xl border border-[rgb(var(--line))] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex aspect-square items-center justify-center px-5 py-4 sm:px-6 sm:py-5">
              <div className="relative h-full max-h-40 w-full max-w-44">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, 33vw"
                  className="object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </button>
        ))}
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <button
            type="button"
            aria-label="Lukk bilde"
            className="absolute inset-0 cursor-default"
            onClick={closeLightbox}
          />

          <div
            className={[
              "relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ease-out",
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
            ].join(" ")}
          >
            <button
              type="button"
              aria-label="Lukk bilde"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 rounded-full bg-black/70 px-3 py-2 text-sm text-white transition hover:bg-black"
            >
              Lukk
            </button>

            <button
              type="button"
              aria-label="Forrige bilde"
              onClick={showPreviousImage}
              className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-lg text-white transition hover:bg-black"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Neste bilde"
              onClick={showNextImage}
              className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-lg text-white transition hover:bg-black"
            >
              ›
            </button>

            <div className="relative aspect-[4/3] w-full bg-white p-8 sm:aspect-[16/10] sm:p-12">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

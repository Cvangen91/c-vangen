"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type SlideshowLogo = {
  src: string;
  alt: string;
  caption?: string;
};

export default function LogoSlideshow({ images }: { images: SlideshowLogo[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const activeImage = images[activeIndex];

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    setIsVisible(false);
    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex]);

  if (!images.length || !activeImage) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="rounded-[2.5rem] border border-[rgb(var(--line))] bg-[rgba(var(--bg),0.72)] p-4 shadow-sm backdrop-blur-md sm:p-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-sm sm:p-6">
        <div
          className={[
            "relative aspect-square w-full transition-all duration-500 ease-out",
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
          ].join(" ")}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Forrige logo"
              onClick={showPrevious}
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-lg text-white transition hover:bg-black"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Neste logo"
              onClick={showNext}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-lg text-white transition hover:bg-black"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Vis logo ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    index === activeIndex
                      ? "w-6 bg-[rgb(var(--accent))]"
                      : "w-2.5 bg-black/20 hover:bg-black/35",
                  ].join(" ")}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

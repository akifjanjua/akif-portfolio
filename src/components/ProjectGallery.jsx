"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ gallery = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const validGallery = useMemo(() => {
    if (!Array.isArray(gallery)) return [];

    return gallery
      .map((item) => ({
        ...item,
        src: item?.src || item?.image,
      }))
      .filter(
        (item) =>
          item &&
          typeof item.src === "string" &&
          item.src.trim() !== ""
      );
  }, [gallery]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  if (!validGallery.length) {
    return null;
  }

  return (
    <>
      <section className="mt-18 pt-8 md:mt-20">
        <div className="mb-10">
          <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
            Project Evidence
          </p>

          <h2 className="section-heading text-3xl font-bold md:text-4xl">
            Prototype, Diagrams & Validation
          </h2>

          <p className="copy-text mt-5 max-w-3xl leading-8 text-gray-400">
            Supporting visuals showing the project prototype, implementation
            details, technical diagrams, experimental work, and final outcomes.
          </p>
        </div>

        <div className="gallery-grid grid gap-8 md:grid-cols-2">
          {validGallery.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="theme-card gallery-card group cursor-pointer overflow-hidden rounded-3xl p-4 text-left"
            >
              <div className="overflow-hidden rounded-2xl border border-sky-500/10 bg-slate-950">
                <Image
                  src={item.src}
                  alt={item.title || `Project evidence ${index + 1}`}
                  width={1200}
                  height={800}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-xl font-bold leading-snug text-white">
                  {item.title || `Project Evidence ${index + 1}`}
                </h3>

                {item.description && (
                  <p className="gallery-description mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                )}

                <p className="mt-5 text-sm font-semibold text-sky-300 transition group-hover:text-white">
                  Click to view →
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/82 px-4 py-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-[96vw] flex-col rounded-[1.6rem] border border-sky-400/25 bg-slate-950/90 p-4 shadow-[0_0_60px_rgba(56,189,248,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950 text-xl text-white shadow-lg transition hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
              aria-label="Close project image preview"
            >
              ×
            </button>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.2rem] bg-slate-900/50">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title || "Selected project image"}
                width={1800}
                height={1200}
                className="h-auto max-h-[78vh] w-auto max-w-[92vw] rounded-[1rem] object-contain"
              />
            </div>

            {(selectedImage.title || selectedImage.description) && (
              <div className="max-w-4xl px-2 pt-4">
                {selectedImage.title && (
                  <h3 className="text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                )}

                {selectedImage.description && (
                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
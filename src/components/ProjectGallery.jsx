"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectGallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <div className="mt-14">
        <div className="mb-8">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Project Gallery
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Visual proof and technical outputs.
          </h2>
        </div>

        <div className="gallery-grid grid gap-6 md:grid-cols-2">
          {gallery.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="gallery-card group rounded-3xl border border-gray-800 bg-[#111111] p-4 text-left transition duration-300 hover:z-10 hover:border-gray-500 hover:bg-[#151515]"
            >
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-black/60">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={1000}
                  height={700}
                  className="max-h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.06]"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-xl font-bold">{image.title}</h3>

                <p className="gallery-description mt-3 text-sm leading-6 text-gray-400">
                  {image.description}
                </p>

                <p className="mt-3 text-sm text-gray-500 transition group-hover:text-gray-300">
                  Click to view full image and description.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-gray-700 bg-[#111111] p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1400}
                height={900}
                className="max-h-[68vh] w-full object-contain"
              />
            </div>

            <p className="copy-text mt-5 leading-7 text-gray-300">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
import fs from "node:fs/promises";
import path from "node:path";
import LogoGalleryClient from "@/components/LogoGalleryClient";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".avif",
  ".svg",
]);

function formatLabel(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type LogoImage = {
  src: string;
  alt: string;
};

export default async function LogoGallery() {
  const logosDirectory = path.join(process.cwd(), "public", "logos");

  let files: string[] = [];
  try {
    files = await fs.readdir(logosDirectory);
  } catch {
    files = [];
  }

  const images = files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, "nb"))
    .map((file) => ({
      src: `/logos/${file}`,
      alt: formatLabel(file) || "Logo",
    }));

  if (images.length === 0) {
    return (
      <section className="rounded-3xl border border-[rgb(var(--line))] bg-[rgba(var(--bg),0.72)] p-8 text-sm text-[rgb(var(--muted))] shadow-sm backdrop-blur-md">
        Ingen bildefiler funnet i{" "}
        <span className="font-medium text-[rgb(var(--ink))]">public/logos</span> ennå.
      </section>
    );
  }

  return <LogoGalleryClient images={images} />;
}

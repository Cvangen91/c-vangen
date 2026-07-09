import Image from "next/image";
import Container from "./Container";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* soft panel */}
      <div className="border-t border-black/5 bg-gradient-to-b from-white to-[rgba(244,247,252,0.9)]">
        <Container>
          <div className="py-14">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left */}
              <div className="space-y-3">
                <div className="relative h-10 w-[11rem] overflow-hidden">
                  <Image
                    src="/pictures/c-vangen-text.svg"
                    alt="C-Vangen"
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
                <p className="max-w-sm text-sm text-[rgb(var(--muted))]">
                  Fullstack-utvikler med designbakgrunn. Jeg bygger løsninger som er
                  raske, ryddige og visuelt gjennomtenkte.
                </p>
              </div>

              {/* Right */}
              <div className="space-y-4 lg:justify-self-end">
                <a
                  className="inline-flex items-center text-sm font-medium text-[rgb(var(--accent2))] hover:text-[rgb(var(--ink))]"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>

                <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--muted))]">
                  <a
                    className="hover:text-[rgb(var(--ink))]"
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="hover:text-[rgb(var(--ink))]"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()}</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

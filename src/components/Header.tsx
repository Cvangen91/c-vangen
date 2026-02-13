"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Hjem" },
  { href: "/projects", label: "Prosjekter" },
  { href: "/about", label: "Om" },
  { href: "/contact", label: "Kontakt" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const activeHref = useMemo(() => {
    const hit = nav.find((n) => isActive(pathname, n.href));
    return hit?.href ?? "";
  }, [pathname]);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // transparent at top -> glass when scrolled
  useEffect(() => {
    const onScroll = () => {
      // threshold: when header should get background
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={[
          "transition-all duration-300",
          scrolled
            ? "bg-[rgba(var(--bg),0.82)] shadow-sm shadow-black/5 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-2">
              <span
                className={[
                  "grid h-8 w-8 place-items-center rounded-xl ring-1 transition-all",
                  scrolled
                    ? "bg-[rgba(74,120,215,0.14)] ring-black/5"
                    : "bg-white/30 ring-white/30",
                ].join(" ")}
              >
                <span className="text-sm font-semibold text-[rgb(var(--accent2))]">
                  CV
                </span>
              </span>
              <span className="font-medium tracking-tight">{site.name}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm md:flex">
              {nav.slice(1).map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "relative transition",
                      active
                        ? "text-[rgb(var(--ink))]"
                        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--ink))]",
                    ].join(" ")}
                  >
                    {item.label}
                    <span
                      className={[
                        "absolute -bottom-2 left-0 h-px bg-[rgba(74,120,215,0.55)] transition-all",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      ].join(" ")}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={[
                "inline-flex items-center justify-center rounded-xl border p-2 text-[rgb(var(--ink))] shadow-sm transition md:hidden",
                scrolled
                  ? "border-black/10 bg-white/70 hover:bg-white"
                  : "border-white/30 bg-white/25 hover:bg-white/35",
              ].join(" ")}
            >
              <span className="relative block h-5 w-5">
                <span
                  className={[
                    "absolute top-1 left-0 h-0.5 w-5 rounded bg-current transition",
                    open ? "top-2.5 rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute top-2.5 left-0 h-0.5 w-5 rounded bg-current transition",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute top-4 left-0 h-0.5 w-5 rounded bg-current transition",
                    open ? "top-2.5 -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <button
            className="fixed inset-0 z-40 bg-black/25"
            onClick={() => setOpen(false)}
            aria-label="Lukk meny"
          />
          <div className="fixed top-0 right-0 left-0 z-50 mt-16 px-4">
            <div className="rounded-3xl border border-[rgb(var(--line))] bg-white shadow-lg">
              <div className="p-4">
                <nav className="flex flex-col gap-1">
                  {nav.map((item) => {
                    const active = isActive(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                          active
                            ? "bg-[rgba(74,120,215,0.10)] text-[rgb(var(--ink))]"
                            : "text-[rgb(var(--muted))] hover:bg-black/5 hover:text-[rgb(var(--ink))]",
                        ].join(" ")}
                      >
                        <span className="font-medium">{item.label}</span>
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-4 text-xs text-[rgb(var(--muted))]">{site.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

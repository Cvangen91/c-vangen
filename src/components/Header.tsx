"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Hjem" },
  {
    href: "/portfolio",
    label: "Portefølje",
    children: [
      { href: "/projects", label: "Prosjekter" },
      { href: "/logos", label: "Logoer" },
    ],
  },
  { href: "/services", label: "Tjenester og priser" },
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
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openDropdown = (href: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDropdownOpen(href);
  };

  const closeDropdownDelayed = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setDropdownOpen(null);
      closeTimerRef.current = null;
    }, 150);
  };

  const closeDropdownImmediate = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDropdownOpen(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, []);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
              <span className="relative h-11 w-[12.5rem] overflow-hidden transition-all sm:w-[13.5rem]">
                <Image
                  src="/pictures/c-vangen-text.svg"
                  alt="C-Vangen"
                  fill
                  sizes="216px"
                  className="object-contain"
                  priority
                />
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm md:flex">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);

                if (item.children) {
                  const isOpen = dropdownOpen === item.href;

                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => openDropdown(item.href)}
                      onMouseLeave={closeDropdownDelayed}
                    >
                      <button
                        className={
                          "relative text-[rgb(var(--muted))] transition hover:text-[rgb(var(--ink))]"
                        }
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        onClick={() => {
                          if (dropdownOpen === item.href) closeDropdownImmediate();
                          else openDropdown(item.href);
                        }}
                      >
                        {item.label}
                        <span
                          className={[
                            "absolute -bottom-2 left-0 h-px bg-[rgba(74,120,215,0.55)] transition-all",
                            active || isOpen ? "w-full" : "w-0",
                          ].join(" ")}
                        />
                      </button>

                      <div
                        onMouseEnter={() => openDropdown(item.href)}
                        onMouseLeave={closeDropdownDelayed}
                        className={[
                          "absolute top-full left-0 mt-4 w-44 rounded-2xl border border-[rgb(var(--line))] p-3",
                          // match header translucent background for a seamless look
                          "bg-[rgba(var(--bg),0.82)] shadow-sm shadow-black/5 backdrop-blur-md",
                          // ensure it sits above other content and accepts pointer events
                          "pointer-events-auto z-50",
                          isOpen ? "block" : "hidden",
                        ].join(" ")}
                      >
                        <nav className="flex flex-col gap-1">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="rounded-md px-3 py-2 text-sm text-[rgb(var(--muted))] hover:bg-black/5 hover:text-[rgb(var(--ink))]"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>
                  );
                }

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
                    "absolute top-1 left-0 h-0.5 w-5 rounded bg-current transition-all duration-200",
                    open ? "top-2.5 rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute top-2.5 left-0 h-0.5 w-5 rounded bg-current transition-all duration-200",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute top-4 left-0 h-0.5 w-5 rounded bg-current transition-all duration-200",
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
            className="fixed inset-0 z-40 bg-black/25 animate-fade-in"
            onClick={() => setOpen(false)}
            aria-label="Lukk meny"
          />
          <div className="fixed top-0 right-0 left-0 z-50 mt-16 px-4">
            <div className="rounded-3xl border border-[rgb(var(--line))] bg-white shadow-lg animate-slide-down-in">
              <div className="p-4">
                <nav className="flex flex-col gap-1">
                  {nav.map((item) => {
                    const active = isActive(pathname, item.href);

                    if (item.children) {
                      return (
                        <div key={item.href}>
                          <div className="px-4 py-3 text-sm font-medium">
                            {item.label}
                          </div>
                          <nav className="flex flex-col gap-1">
                            {item.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={() => setOpen(false)}
                                className={[
                                  "flex items-center justify-between rounded-2xl px-6 py-3 text-sm transition",
                                  isActive(pathname, c.href)
                                    ? "bg-[rgba(74,120,215,0.10)] text-[rgb(var(--ink))]"
                                    : "text-[rgb(var(--muted))] hover:bg-black/5 hover:text-[rgb(var(--ink))]",
                                ].join(" ")}
                              >
                                <span className="font-medium">{c.label}</span>
                                {isActive(pathname, c.href) && (
                                  <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                                )}
                              </Link>
                            ))}
                          </nav>
                        </div>
                      );
                    }

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

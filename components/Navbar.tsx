"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (
    href: string,
    label: string,
    opts: { external?: boolean } = {}
  ) => (
    <li>
      {opts.external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          {label}
        </a>
      ) : (
        <Link
          href={href}
          className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          {label}
        </Link>
      )}
    </li>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/20 via-fuchsia-500/20 to-pink-500/20" />
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between border-b border-white/10 px-4 py-3">
        <Link href="#home" className="text-lg font-bold tracking-wide" onClick={() => setOpen(false)}>
          PHATTY
        </Link>
        <button
          aria-label="Toggle menu"
          className="sm:hidden rounded-md p-2 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className="hidden items-center gap-1 sm:flex">
          {navItem("#home", "Home")}
          {navItem("#skills", "Skills")}
          {navItem("https://github.com/KoonPaT", "Work", { external: true })}
          {navItem("https://checker.phatty.in.th/", "AI Checker", { external: true })}
          {navItem("https://yhor.xyz", "URL Shortener", { external: true })}
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/50">
          <ul className="mx-auto max-w-6xl px-2 py-2 space-y-1">
            {navItem("#home", "Home")}
            {navItem("#skills", "Skills")}
            {navItem("https://github.com/KoonPaT", "Work", { external: true })}
            {navItem("https://checker.phatty.in.th/", "AI Checker", { external: true })}
            {navItem("https://yhor.xyz", "URL Shortener", { external: true })}
          </ul>
        </div>
      )}
    </header>
  );
}

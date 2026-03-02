"use client";

import { useState } from "react";

const links = [
  { label: "The Archetypes", href: "#archetypes" },
  { label: "The Assessment", href: "/assessment" },
  { label: "Solutions", href: "#solutions" },
  { label: "Podcast", href: "#podcast" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pt-3 pb-2">
        {/* Logo */}
        <a href="#">
          <img
            src="/logo.png"
            alt="Unfiltered Conversations"
            className="h-auto w-[180px]"
          />
        </a>

        {/* Center links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/assessment"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-indigo text-white text-sm font-medium rounded-lg hover:bg-indigo/90 transition-colors"
          >
            Take the Assessment
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-indigo transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assessment"
            className="inline-flex items-center px-5 py-2.5 bg-indigo text-white text-sm font-medium rounded-lg mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Take the Assessment
          </a>
        </div>
      )}
    </nav>
  );
}

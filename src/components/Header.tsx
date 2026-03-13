'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#1e3a5f]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <rect width="28" height="28" rx="6" fill="#1e3a5f" />
            <path d="M7 10h14M7 14h10M7 18h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="7" r="4" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
            <path d="M19.5 7l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          SubjectLineScore
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium text-gray-600 transition hover:text-[#1e3a5f]">
            Home
          </Link>
          <Link href="/tester" className="text-sm font-medium text-gray-600 transition hover:text-[#1e3a5f]">
            Tester
          </Link>
          <Link href="/examples" className="text-sm font-medium text-gray-600 transition hover:text-[#1e3a5f]">
            Examples
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#1e3a5f]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tester"
              className="text-sm font-medium text-gray-600 hover:text-[#1e3a5f]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tester
            </Link>
            <Link
              href="/examples"
              className="text-sm font-medium text-gray-600 hover:text-[#1e3a5f]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

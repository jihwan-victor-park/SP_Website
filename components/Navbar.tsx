"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-dark-navy via-navy to-dark-navy text-white shadow-2xl fixed w-full z-50 border-b border-accent-blue/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Yale-inspired Shield */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Yale-inspired Shield */}
              <svg
                width="56"
                height="64"
                viewBox="0 0 56 64"
                className="group-hover:scale-105 transition-transform duration-300"
              >
                {/* Shield background */}
                <path
                  d="M28 2 L52 12 L52 32 C52 48 28 60 28 60 C28 60 4 48 4 32 L4 12 Z"
                  fill="url(#shieldGradient)"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                </defs>
                {/* S&P Text */}
                <text
                  x="28"
                  y="34"
                  fontFamily="serif"
                  fontSize="18"
                  fontWeight="bold"
                  fill="#d4af37"
                  textAnchor="middle"
                  className="select-none"
                >
                  S&P
                </text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold tracking-tight text-white font-serif">
                Solomon & Park
              </div>
              <div className="text-xs text-gray-400 tracking-wider uppercase font-light">
                College Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-300 hover:text-gold transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/what-we-offer"
              className="text-gray-300 hover:text-gold transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-gold transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold px-7 py-2.5 rounded-lg transition-all duration-300 font-semibold text-black shadow-lg hover:shadow-2xl hover:shadow-gold/30 border border-gold/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/what-we-offer"
                className="hover:text-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                What We Offer
              </Link>
              <Link
                href="/pricing"
                className="hover:text-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="bg-gold hover:bg-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 text-center text-black font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

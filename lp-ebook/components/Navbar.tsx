"use client";

import { useState, useEffect } from "react";
import { Scale, BookOpen, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b1528]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3"
          : "bg-[#0b1528] border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-white font-bold tracking-tight text-lg leading-none font-serif-title flex items-center gap-1.5">
              TIPIKOR 2026
              <span className="text-[10px] font-sans font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded">
                KUHP BARU
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wide">
              300 Soal Jawab & Referensi Hukum
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#keunggulan"
            className="hover:text-amber-400 transition-colors"
          >
            Keunggulan
          </a>
          <a
            href="#daftar-isi"
            className="hover:text-amber-400 transition-colors"
          >
            18 BAB Materi
          </a>
          <a
            href="#strategi-ujian"
            className="hover:text-amber-400 transition-colors"
          >
            Metode IRAC
          </a>
          <a
            href="#target-pembaca"
            className="hover:text-amber-400 transition-colors"
          >
            Untuk Siapa
          </a>
          <a href="#harga" className="hover:text-amber-400 transition-colors">
            Paket & Harga
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#harga"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>Pesan Ebook</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1b33] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            Keunggulan Buku
          </a>
          <a
            href="#daftar-isi"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            18 BAB Materi Lengkap
          </a>
          <a
            href="#strategi-ujian"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            Metode IRAC & Ujian
          </a>
          <a
            href="#target-pembaca"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            Untuk Siapa Buku Ini
          </a>
          <a
            href="#harga"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            Pilihan Paket & Harga
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400 font-medium text-sm"
          >
            Pertanyaan Umum (FAQ)
          </a>
          <div className="pt-2">
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-3 rounded-lg shadow transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Pesan Ebook Sekarang (Hemat 60%)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

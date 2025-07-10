"use client";

import { useState } from "react"; 
import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; 
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className={`w-full bg-white/90 backdrop-blur border-b border-sky-100 shadow-sm sticky top-0 z-50 ${montserrat.className}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`text-3xl font-bold text-sky-800`}>
          CleanGo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sky-700 font-medium ">
          <Link href="/" className="hover:text-sky-900 transition-colors ">Home</Link>
          <Link href="/about-us" className="hover:text-sky-900 transition-colors">About</Link>
          <Link href="/products" className="hover:text-sky-900 transition-colors">Products</Link>
          <Link href="/blog-list" className="hover:text-sky-900 transition-colors">Blogs</Link>
          <Link href="/teams" className="hover:text-sky-900 transition-colors">Teams</Link>

          {user ? (
            <>
              <Link href="/write" className="hover:text-sky-900 transition-colors">Write</Link>
              <Button variant="destructive" size="sm" onClick={clearAuth}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" size="sm">Sign in</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sky-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 pb-4 flex flex-col gap-4 text-sky-700 font-medium text-sm bg-white border-t border-sky-100 shadow-sm">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/blog-list" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>Teams</Link>

          {user ? (
            <>
              <Link href="/write" onClick={() => setMenuOpen(false)}>Write</Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  clearAuth();
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" size="sm">Sign in</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

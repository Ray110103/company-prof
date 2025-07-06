"use client";

import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-sky-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`text-3xl font-bold text-sky-800 ${lato.className}`}>
          CleanGo
        </Link>

        <div className="flex items-center gap-6 text-sky-700 font-medium text-sm">
          <Link href="/" className="hover:text-sky-900 transition-colors">Home</Link>
          <Link href="/about-us" className="hover:text-sky-900 transition-colors">About</Link>
          <Link href="/products" className="hover:text-sky-900 transition-colors">Products</Link>
          <Link href="/blog-list" className="hover:text-sky-900 transition-colors">Blogs</Link>
          <Link href="/teams" className="hover:text-sky-900 transition-colors">Teams</Link>

          {user ? (
            <>
              <Link href="/write" className="hover:text-sky-900 transition-colors">Write</Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={clearAuth}
                className="ml-2"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" size="sm">Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

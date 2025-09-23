"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex justify-around py-6 bg-cyan-950">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "font-semibold text-amber-100 hover:underline hover:text-amber-200"
            : "text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/gallery"
        className={`${
          pathname === "/gallery"
            ? "font-semibold text-amber-100 hover:underline hover:text-amber-200"
            : "text-white"
        }`}
      >
        Gallery
      </Link>
      <Link
        href="/products"
        className={`${
          pathname === "/products"
            ? "font-semibold text-amber-100 hover:underline hover:text-amber-200"
            : "text-white"
        }`}
      >
        Products
      </Link>
    </div>
  );
};

export default Navbar;

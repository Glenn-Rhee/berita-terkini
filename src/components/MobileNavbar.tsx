"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import BrandIcon from "@/icon/brand-icon";
import { cn } from "@/lib/cn";
import { menuNavbar } from "@/lib/menuNavbar";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="w-full sticky top-0 left-0 right-0 z-90 bg-white shadow-md md:hidden">
        <Container className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-x-3">
            <BrandIcon />
            <h1 className="font-poppins font-semibold text-xl text-dark-800">
              Berita Terkini
            </h1>
          </Link>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            className="flex flex-col justify-center items-center gap-y-1.5 w-10 h-10 rounded-lg"
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark-800 rounded-full transition-all duration-300 origin-center",
                isOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark-800 rounded-full transition-all duration-300",
                isOpen && "opacity-0 scale-x-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark-800 rounded-full transition-all duration-300 origin-center",
                isOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </Container>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-80 bg-black/30 transition-opacity duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 z-100 flex flex-col pt-20 pb-10 px-8 gap-y-8 transition-transform duration-300 ease-in-out md:hidden",
          "bg-brand-color/90 backdrop-blur-sm",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Tutup menu"
          className="absolute top-5 right-5 text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Link href="/" className="flex items-center gap-x-3">
          <BrandIcon fill="white" />
          <h1 className="font-poppins font-semibold text-xl text-white">
            Berita Terkini
          </h1>
        </Link>

        <ul className="flex flex-col gap-y-6">
          {menuNavbar.map((menu) => (
            <li key={menu.text}>
              <Link
                href={menu.href}
                className={cn(
                  "font-inter transition-colors duration-300",
                  pathname === menu.href
                    ? "text-white font-semibold text-lg"
                    : "text-white/70 font-medium text-lg hover:text-white",
                )}
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

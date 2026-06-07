"use client";
import Container from "./Container";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import BrandIcon from "@/icon/brand-icon";
import { useEffect, useState } from "react";
import { menuNavbar } from "@/lib/menuNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full sticky top-0 left-0 right-0 transition-colors z-90",
        scrolled ? "bg-brand-color" : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-x-3">
          <BrandIcon fill={scrolled ? "white" : undefined} />
          <h1
            className={cn(
              "font-poppins font-semibold text-xl",
              scrolled ? "text-white" : "text-dark-800",
            )}
          >
            Berita Terkini
          </h1>
        </Link>

        <ul className="flex flex-1 items-center w-full justify-end gap-x-8">
          {menuNavbar.map((menu) => (
            <li key={menu.text}>
              <Link
                key={menu.text}
                href={menu.href}
                className={cn(
                  "font-inter transition-colors duration-300",
                  scrolled
                    ? pathname === menu.href
                      ? "text-white font-semibold"
                      : "text-invert hover:text-white font-medium"
                    : pathname === menu.href
                      ? "text-brand-color font-semibold"
                      : "font-medium text-gray-3 hover:text-brand-color",
                )}
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

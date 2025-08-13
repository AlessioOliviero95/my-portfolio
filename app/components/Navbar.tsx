"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (!nav) return;
    function handleClick(e: MouseEvent) {
      // Only close if click is outside the menu
      const menu = document.querySelector("nav ul.md:hidden");
      if (menu && !menu.contains(e.target as Node)) setNav(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [nav]);

  return (
    <header>
      <nav
        className="fixed w-full flex justify-between items-center z-50 rounded-b-2xl px-4"
      >
        <span className="font-bold text-xl">Alessio.Dev</span>
        <ul className="hidden md:flex gap-4 items-center">
          <li className="rounded-md px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-background text-foreground z-10 p-6"
              : "fixed left-[-100%]"
          } md:hidden transition-all duration-500`}
        >
          <h1 className="w-full font-bold text-xl mb-6">Alessio.Dev</h1>
          <li className="mb-4 hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#">Home</Link>
          </li>
          <li className="mb-4 hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="mb-4 hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#about">About</Link>
          </li>
          <li className="mb-4 hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

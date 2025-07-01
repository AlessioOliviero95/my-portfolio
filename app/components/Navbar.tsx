import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="border-b py-4">
      <nav className="container flex justify-between items-center">
        <span className="font-bold text-xl">Luca.Dev</span>
        <ul className="flex gap-4 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
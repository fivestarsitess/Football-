"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Age Groups", "/age-groups"],
  ["Training", "/training"],
  ["Membership", "/membership"],
  ["Volunteers", "/volunteer"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Five Star Ball home">
          <Image src="/five-star-ball-logo.webp" alt="Five Star Ball Football Academy shield" width={68} height={68} priority />
          <div className="brand-copy">
            <strong>FIVE STAR BALL</strong>
            <span>FOOTBALL ACADEMY</span>
          </div>
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="nav-register" href="/register" onClick={() => setOpen(false)}>Register</Link>
        </nav>
      </div>
    </header>
  );
}

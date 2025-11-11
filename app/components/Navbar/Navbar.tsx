"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Navbar.scss";
import { socialLinks } from "../../utils/socialLinks";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`navbar${isSolid ? " navbar--solid" : ""}${isMenuOpen ? " navbar--menu-open" : ""}`}
      >
        <div className="navbar__container">
          <div className="navbar__brand">
            <Link href="#start">Jagodowa Harmonia Zdrowia</Link>
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-panel"
            className="navbar__toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>
          <nav className="navbar__navigation" aria-label="Główne">
            <ul className="navbar__list">
              {navLinks.map((link) => (
                <li key={link.href} className="navbar__item">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="navbar__social" aria-label="Media społecznościowe">
            {socialLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`navbar__social-link navbar__social-link--${link.key}`}
              >
                <link.Icon aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </header>

      <nav
        id="navbar-mobile-panel"
        className={`navbar__mobile-panel${isMenuOpen ? " navbar__mobile-panel--open" : ""}`}
        aria-label="Menu mobilne"
      >
        <ul className="navbar__mobile-list">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__mobile-item">
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-social">
          {socialLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`navbar__mobile-social-link navbar__mobile-social-link--${link.key}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <link.Icon aria-hidden />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}


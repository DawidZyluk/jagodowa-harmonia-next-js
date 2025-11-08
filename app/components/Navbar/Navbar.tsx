"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Navbar.scss";

const navLinks = [
  { href: "#start", label: "Start" },
  { href: "#about", label: "O mnie" },
  { href: "#services", label: "Usługi" },
  { href: "#cooperation", label: "Współpraca" },
  { href: "#contact", label: "Kontakt" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    key: "facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    key: "instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    key: "linkedin",
    Icon: FaLinkedinIn,
  },
];

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
      if (window.scrollY > 60 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth >= 1100 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={classNames("navbar", {
          "navbar--solid": isSolid,
          "navbar--menu-open": isMenuOpen,
        })}
      >
        <div className={classNames("navbar__container")}>
          <div className={classNames("navbar__brand")}>
            <Link href="#start">Jagodowa Harmonia Zdrowia</Link>
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-panel"
            className={classNames("navbar__toggle")}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>
          <nav className={classNames("navbar__navigation")} aria-label="Główne">
            <ul className={classNames("navbar__list")}>
              {navLinks.map((link) => (
                <li key={link.href} className={classNames("navbar__item")}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={classNames("navbar__social")} aria-label="Media społecznościowe">
            {socialLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={classNames(`navbar__social-link navbar__social-link--${link.key}`)}
              >
                <link.Icon aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </header>

      <nav
        id="navbar-mobile-panel"
        className={classNames("navbar__mobile-panel", {
          "navbar__mobile-panel--open": isMenuOpen,
        })}
        aria-label="Menu mobilne"
      >
        <ul className={classNames("navbar__mobile-list")}>
          {navLinks.map((link) => (
            <li key={link.href} className={classNames("navbar__mobile-item")}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={classNames("navbar__mobile-social")}>
          {socialLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={classNames(`navbar__mobile-social-link navbar__mobile-social-link--${link.key}`)}
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


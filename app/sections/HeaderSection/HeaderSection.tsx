"use client";

import Button from "@/app/components/Button/Button";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/app/hooks/useParallax";
import { useMinWidth } from "@/app/hooks/useMinWidth";
import "./HeaderSection.scss";

export default function HeaderSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [mounted, setMounted] = useState(false);
  const isDesktop = useMinWidth(800);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundY = useParallax(scrollYProgress, -500);

  return (
    <>
      <section className="header-section" ref={ref} id="start">
        <motion.div
          aria-hidden
          className="header-section__background"
          style={mounted && isDesktop ? { y: backgroundY } : undefined}
        />
        <motion.img
          aria-hidden
          src="/foreground.svg"
          alt=""
          className="header-section__foreground"
        />
        <div className="header-section__overlay" aria-hidden />

        <div className="header-section__content">
          <h1 className="header-section__title">
            Cześć, jestem Jagoda - dietetyczka, która sama przeszła drogę do zdrowia i równowagi.
          </h1>
          <p className="header-section__description">
            Pomagam osobom z insulinoopornością, zaburzeniami hormonalnymi i problemami jelitowymi zrozumieć swoje ciało i odzyskać energię poprzez jedzenie dopasowane do ich potrzeb.
Tworzę proste i skuteczne plany żywieniowe, które wspierają wyniki badań i dobre samopoczucie - bez restrykcji i presji.
          </p>
          <Button href="https://jagodowa-harmonia.timego.pl/services">Umów BEZPŁATNĄ konsultację online</Button>
        </div>
      </section>

      <section className="header-section__content-mobile">
        <h1 className="header-section__title">
          Cześć, jestem Jagoda - dietetyczka, która sama przeszła drogę do zdrowia i równowagi.
        </h1>
        <p className="header-section__description">
          Pomagam osobom z insulinoopornością, zaburzeniami hormonalnymi i problemami jelitowymi zrozumieć swoje ciało i odzyskać energię poprzez jedzenie dopasowane do ich potrzeb.
Tworzę proste i skuteczne plany żywieniowe, które wspierają wyniki badań i dobre samopoczucie - bez restrykcji i presji.
        </p>
        <Button href="https://jagodowa-harmonia.timego.pl/services">Umów BEZPŁATNĄ konsultację online</Button>
      </section>
    </>
  );
}

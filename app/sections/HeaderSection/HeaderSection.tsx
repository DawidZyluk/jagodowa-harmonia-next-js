"use client";

import Button from "@/app/components/Button/Button";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createBemClassNames } from "../../utils";
import "./HeaderSection.scss";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

function useMinWidth(minWidth: number) {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window === "undefined" ? true : window.innerWidth >= minWidth,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const query = window.matchMedia(`(min-width: ${minWidth}px)`);
    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(query.matches);
    query.addEventListener("change", updateMatches);

    return () => {
      query.removeEventListener("change", updateMatches);
    };
  }, [minWidth]);

  return matches;
}

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

  const classNames = createBemClassNames(
    "header-section",
    undefined,
    "background",
    "foreground",
    "overlay",
    "content",
    "content-mobile",
    "title",
    "description"
  );

  const backgroundY = useParallax(scrollYProgress, -500);

  return (
    <>
      <section className={classNames["header-section"]} ref={ref} id="start">
        <motion.div
          aria-hidden
          className={classNames.background}
          style={mounted && isDesktop ? { y: backgroundY } : undefined}
        />
        <motion.img
          aria-hidden
          src="/foreground.svg"
          alt=""
          className={classNames.foreground}
        />
        <div className={classNames.overlay} aria-hidden />

        <div className={classNames.content}>
          <h1 className={classNames.title}>
            Cześć, jestem Jagoda - dietetyczka, która sama przeszła drogę do zdrowia i równowagi.
          </h1>
          <p className={classNames.description}>
            Pomagam osobom z insulinoopornością, zaburzeniami hormonalnymi i problemami jelitowymi zrozumieć swoje ciało i odzyskać energię poprzez jedzenie dopasowane do ich potrzeb.
Tworzę proste i skuteczne plany żywieniowe, które wspierają wyniki badań i dobre samopoczucie - bez restrykcji i presji.
          </p>
          <Button href="https://jagodowa-harmonia.timego.pl/services">Umów BEZPŁATNĄ konsultację online</Button>
        </div>
      </section>

      <section className={classNames["content-mobile"]}>
        <h1 className={classNames.title}>
          Cześć, jestem Jagoda - dietetyczka, która sama przeszła drogę do zdrowia i równowagi.
        </h1>
        <p className={classNames.description}>
          Pomagam osobom z insulinoopornością, zaburzeniami hormonalnymi i problemami jelitowymi zrozumieć swoje ciało i odzyskać energię poprzez jedzenie dopasowane do ich potrzeb.
Tworzę proste i skuteczne plany żywieniowe, które wspierają wyniki badań i dobre samopoczucie - bez restrykcji i presji.
        </p>
        <Button href="https://jagodowa-harmonia.timego.pl/services">Umów BEZPŁATNĄ konsultację online</Button>
      </section>
    </>
  );
}

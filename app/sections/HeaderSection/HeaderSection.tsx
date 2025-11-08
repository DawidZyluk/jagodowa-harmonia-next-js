"use client";

import Button from "@/app/components/Button/Button";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { createBemClassNames } from "../../utils";
import "./HeaderSection.scss";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

export default function HeaderSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const classNames = createBemClassNames(
    "header-section",
    undefined,
    "background",
    "foreground",
    "overlay",
    "content",
    "title",
    "description"
  );

  const backgroundY = useParallax(scrollYProgress, -500);

  return (
    <section className={classNames["header-section"]} ref={ref}>
      <motion.div
        aria-hidden
        className={classNames.background}
        style={{ y: backgroundY }}
      />
      <motion.img
        aria-hidden
        src="/foreground.svg"
        alt=""
        className={classNames.foreground}
        style={{ top: '250px' }}
      />
      <div className={classNames.overlay} aria-hidden />

      <div className={classNames.content}>
        <h1 className={classNames.title}>
          Cześć, jestem Jagoda - dietetyczka z własną historią.
        </h1>
        <p className={classNames.description}>
          Tworzę smaczne i skuteczne plany żywieniowe, które pomagają polepszyć
          wyniki badań, zwiększyć energię i poprawić samopoczucie.
        </p>
        <Button>Umów wizytę</Button>
      </div>
    </section>
  );
}

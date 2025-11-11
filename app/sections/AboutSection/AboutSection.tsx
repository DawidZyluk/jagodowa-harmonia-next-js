'use client';

import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { GiHeartOrgan } from "react-icons/gi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LuBrain, LuLeaf, LuStethoscope } from "react-icons/lu";
import { RiRunLine } from "react-icons/ri";
import "./AboutSection.scss";

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(competencyGroups[0].title);

  return (
    <section className={classNames("about-section")} id="about">
      <div className={classNames("about-section__content")}>
        <div className={classNames("about-section__media")}>
          <div className={classNames("about-section__image")}>
            <img src="/4.jpg" alt="Jagoda podczas konsultacji dietetycznej" />
          </div>
        </div>

        <div className={classNames("about-section__copy")}>
          <p className={classNames("about-section__eyebrow")}>O mnie</p>
          <h2 className={classNames("about-section__title")}>
            Rozumiem zdrowie nie tylko z książek, ale z własnej historii
          </h2>
          <p className={classNames("about-section__paragraph")}>
            Nazywam się Jagoda i jestem certyfikowaną dietetyczką online z wykształceniem w chemii medycznej.
Pomagam kobietom z insulinoopornością, niedoczynnością tarczycy i zaburzeniami hormonalnymi poprawić wyniki badań, odzyskać energię i spokój z jedzeniem - bez restrykcji i głodówek.
<br />
Pracuję z osobami, które chcą schudnąć w zdrowy sposób lub poprawić swoje samopoczucie poprzez dopasowany plan żywieniowy online.
Sama przeszłam przez zaburzenia odżywiania i zmagam się z niedoczynnością tarczycy, dlatego wiem, jak ważne jest podejście oparte na zrozumieniu, fizjologii i empatii - a nie tylko na liczeniu kalorii.
<br />
Wiem też, jak trudno jest znaleźć wsparcie bez oceniania.
Dlatego każda współpraca ze mną to przestrzeń, w której możesz mówić o swoich trudnościach i potrzebach otwarcie - bez wstydu i bez presji.
          </p>
        </div>
      </div>

      <div className={classNames("about-section__metrics")}>
        <div className={classNames("about-section__metrics-background")} aria-hidden />

        <div className={classNames("about-section__metrics-content")}>
          <h2 className={classNames("about-section__metrics-title")}>Kompetencje</h2>

          <div className={classNames("about-section__accordion")}>
            {competencyGroups.map(({ title, competencies }) => {
              const isActive = activeAccordion === title;

              return (
                <div
                  key={title}
                  className={classNames("about-section__accordion-item", {
                    "about-section__accordion-item--active": isActive,
                  })}
                >
                  <button
                    type="button"
                    className={classNames("about-section__accordion-trigger")}
                    onClick={() => setActiveAccordion(isActive ? null : title)}
                    aria-expanded={isActive}
                  >
                    <span>{title}</span>
                    <span aria-hidden>{isActive ? "−" : "+"}</span>
                  </button>

                  <AccordionPanel isActive={isActive}>
                    <div className={classNames("about-section__metrics-grid")}>
                      {competencies.map(({ label, Icon }) => (
                        <div key={label} className={classNames("about-section__metric-card")}>
                          <div className={classNames("about-section__metric-icon")}>
                            <Icon aria-hidden />
                          </div>
                          <p className={classNames("about-section__metric-label")}>{label}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionPanel>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const competencyGroups = [
  {
    title: "Diagnostyka i analizy",
    competencies: [
      { label: "Analiza wyników badań", Icon: HiOutlineChartBar },
      { label: "Zaburzenia tarczycy", Icon: LuStethoscope },
      { label: "Interpretacja wyników hormonalnych", Icon: GiHeartOrgan },
      { label: "Ocena mikrobioty jelitowej", Icon: LuBrain },
    ],
  },
  {
    title: "Specjalizacje dietetyczne",
    competencies: [
      { label: "Diety Low FODMAP", Icon: LuLeaf },
      { label: "Wsparcie przy IO i PCOS", Icon: GiHeartOrgan },
      { label: "Zaburzenia odżywiania", Icon: LuBrain },
      { label: "Żywienie sportowców", Icon: RiRunLine },
    ],
  },
  {
    title: "Praca z pacjentem",
    competencies: [
      { label: "Psychodietetyka", Icon: LuBrain },
      { label: "Coaching zdrowotny", Icon: HiOutlineChartBar },
      { label: "Budowanie planów długoterminowych", Icon: RiRunLine },
      { label: "Wsparcie emocjonalne", Icon: GiHeartOrgan },
    ],
  },
];

type AccordionPanelProps = {
  isActive: boolean;
  children: ReactNode;
};

function AccordionPanel({ isActive, children }: AccordionPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    if (isActive) {
      panel.style.height = "auto";
      panel.style.opacity = "1";
      panel.style.overflow = "visible";
    } else {
      panel.style.height = "0px";
      panel.style.opacity = "0";
      panel.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const startHeight = `${panel.scrollHeight}px`;

    if (isActive) {
      panel.style.overflow = "hidden";
      panel.style.height = startHeight;
      panel.style.opacity = "1";

      const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName !== "height" || panelRef.current !== panel) {
          return;
        }

        panel.style.height = "auto";
        panel.style.overflow = "visible";
      };

      panel.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        panel.removeEventListener("transitionend", handleTransitionEnd);
      };
    }

    panel.style.overflow = "hidden";
    panel.style.height = startHeight;
    panel.style.opacity = "1";

    requestAnimationFrame(() => {
      if (!panelRef.current) {
        return;
      }

      panel.style.height = "0px";
      panel.style.opacity = "0";
    });
  }, [isActive]);

  return (
    <div
      ref={panelRef}
      className={classNames("about-section__accordion-panel", {
        "about-section__accordion-panel--open": isActive,
      })}
    >
      {children}
    </div>
  );
}

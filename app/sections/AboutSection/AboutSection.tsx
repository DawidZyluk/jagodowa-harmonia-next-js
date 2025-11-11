'use client';

import { useState } from "react";
import AccordionPanel from "@/app/components/Accordion/AccordionPanel";
import { competencyGroups } from "./competencyGroups";
import "./AboutSection.scss";

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <section className="about-section" id="about">
      <div className="about-section__content">
        <div className="about-section__media">
          <div className="about-section__image">
            <img src="/4.jpg" alt="Jagoda podczas konsultacji dietetycznej" />
          </div>
        </div>

        <div className="about-section__copy">
          <p className="about-section__eyebrow">O mnie</p>
          <h2 className="about-section__title">
            Rozumiem zdrowie nie tylko z książek, ale z własnej historii
          </h2>
          <div className="about-section__paragraph">
            <p>
              Nazywam się Jagoda i jestem certyfikowaną dietetyczką online z wykształceniem w chemii medycznej.
              Pomagam kobietom z insulinoopornością, niedoczynnością tarczycy i zaburzeniami hormonalnymi poprawić wyniki badań, odzyskać energię i spokój z jedzeniem - bez restrykcji i głodówek.
            </p>
            <p>
              Pracuję z osobami, które chcą schudnąć w zdrowy sposób lub poprawić swoje samopoczucie poprzez dopasowany plan żywieniowy online.
              Sama przeszłam przez zaburzenia odżywiania i zmagam się z niedoczynnością tarczycy, dlatego wiem, jak ważne jest podejście oparte na zrozumieniu, fizjologii i empatii - a nie tylko na liczeniu kalorii.
            </p>
            <p>
              Wiem też, jak trudno jest znaleźć wsparcie bez oceniania.
              Dlatego każda współpraca ze mną to przestrzeń, w której możesz mówić o swoich trudnościach i potrzebach otwarcie - bez wstydu i bez presji.
            </p>
          </div>
        </div>
      </div>

      <div className="about-section__metrics">
        <div className="about-section__metrics-background" aria-hidden />

        <div className="about-section__metrics-content">
          <h2 className="about-section__metrics-title">Kompetencje</h2>

          <div className="about-section__accordion">
            {competencyGroups.map(({ title, competencies }) => {
              const isActive = activeAccordion === title;

              return (
                <div
                  key={title}
                  className={`about-section__accordion-item${isActive ? " about-section__accordion-item--active" : ""}`}
                >
                  <button
                    type="button"
                    className="about-section__accordion-trigger"
                    onClick={() => setActiveAccordion(isActive ? null : title)}
                    aria-expanded={isActive}
                  >
                    <span>{title}</span>
                    <span aria-hidden>{isActive ? "−" : "+"}</span>
                  </button>

                  <AccordionPanel isActive={isActive}>
                    <div className="about-section__metrics-grid">
                      {competencies.map(({ label, Icon }) => (
                        <div key={label} className="about-section__metric-card">
                          <div className="about-section__metric-icon">
                            <Icon aria-hidden />
                          </div>
                          <p className="about-section__metric-label">{label}</p>
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

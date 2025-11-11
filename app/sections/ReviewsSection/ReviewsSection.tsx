"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import "./ReviewsSection.scss";

type Review = {
  id: number;
  author: string;
  condition: string;
  avatar: string;
  content: string;
};

const AUTOPLAY_INTERVAL_MS = 6000;

export default function ReviewsSection() {
  const reviews = useMemo<Review[]>(
    () => [
      {
        id: 1,
        author: "Ania",
        condition: "insulinooporność",
        avatar: "/woman.jpg",
        content:
          "Jagoda pomogła mi wypracować nowe nawyki, które realnie zobaczyłam na wynikach badań. Zero presji, dużo wsparcia.",
      },
      {
        id: 2,
        author: "Kasia",
        condition: "problemy z tarczycą",
        avatar: "/woman.jpg",
        content:
          "Wreszcie mam jasny plan żywieniowy, który działa i nie zabiera mi całej energii. Prosto, jasno i z empatią.",
      },
      {
        id: 3,
        author: "Marek",
        condition: "redukcja wagi po kontuzji",
        avatar: "/man.jpg",
        content:
          "Czułem się wysłuchany. Jagoda tłumaczy wszystko z cierpliwością i poczuciem humoru. Gorąco polecam jej wsparcie.",
      },
      {
        id: 4,
        author: "Ola",
        condition: "PCOS i wahania hormonalne",
        avatar: "/woman.jpg",
        content:
          "Plan żywieniowy był dopasowany do mojej codzienności. Po raz pierwszy czuję stabilizację hormonów i energii w ciągu dnia.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reviews.length]);

  const goTo = (index: number) => {
    setActiveIndex((reviews.length + index) % reviews.length);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-section__container">
        <h2 className="reviews-section__title">Opinie podopiecznych</h2>
        <p className="reviews-section__paragraph">Realne rezultaty i zadowolenie klientów motywują najbardziej.</p>

        <div className="reviews-carousel">
          <div className="reviews-carousel__viewport">
            <div
              className="reviews-carousel__track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <article key={review.id} className="reviews-carousel__slide">
                  <span className="reviews-carousel__quote" aria-hidden="true" />
                  <div className="reviews-carousel__avatar">
                    <Image
                      src={review.avatar}
                      alt={`Zdjęcie ${review.author}`}
                      fill
                      sizes="96px"
                      priority={index === 0}
                    />
                  </div>
                  <p className="reviews-carousel__content">{review.content}</p>
                  <div className="reviews-carousel__details">
                    <span className="reviews-carousel__author">{review.author}</span>
                    <span className="reviews-carousel__condition">{review.condition}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reviews-carousel__dots" role="tablist" aria-label="Opinie klientów">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goTo(index)}
                className={`reviews-carousel__dot${index === activeIndex ? " reviews-carousel__dot--active" : ""}`}
                aria-label={`Przejdź do opinii ${index + 1}`}
                aria-selected={index === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

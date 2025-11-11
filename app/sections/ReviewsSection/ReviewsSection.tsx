"use client";

import Image from "next/image";
import { useCarousel } from "@/app/hooks/useCarousel";
import { reviews } from "./reviews";
import "./ReviewsSection.scss";

const AUTOPLAY_INTERVAL_MS = 6000;

export default function ReviewsSection() {
  const { activeIndex, goTo } = useCarousel(reviews.length, AUTOPLAY_INTERVAL_MS);

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

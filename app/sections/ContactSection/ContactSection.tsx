import Button from "@/app/components/Button/Button";
import "./ContactSection.scss";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <h2 className="contact-section__title">Kontakt</h2>
        <p className="contact-section__subtitle">
          Masz pytania lub chcesz umówić wizytę? Napisz lub zadzwoń.
        </p>

        <div className="contact-section__info">
          <Button
            href="https://app.zencal.io/u/jagoda-giedrojc-dietetyk"
            className="contact-section__button"
          >
            Umów się online
          </Button>
          <p>Telefon</p>
          <p className="contact-section__value">+48 789 162 740</p>
          
        </div>
      </div>
    </section>
  );
}

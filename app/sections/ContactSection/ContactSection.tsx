import classNames from "classnames";
import "./ContactSection.scss";

export default function ContactSection() {
  return (
    <section className={classNames("contact-section")}>
      <div className={classNames("contact-section__container")}>
        <h2 className={classNames("contact-section__title")}>Kontakt</h2>
        <p className={classNames("contact-section__subtitle")}>Masz pytania lub chcesz umówić wizytę? Napisz lub zadzwoń.</p>
        
        <div className={classNames("contact-section__info")}>
          <button className={classNames("contact-section__button")}>Umów się online</button>
          <p>Telefon</p>
          <p className={classNames("contact-section__value")}>+48 789 162 740</p>
          <p>Gabinet</p>
          <p className={classNames("contact-section__value")}>al. Solidarności 117</p>
        </div>
      </div>
    </section>
  );
}

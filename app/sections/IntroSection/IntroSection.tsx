import classNames from "classnames";
import "./IntroSection.scss";

export default function IntroSection() {
  return (
    <section className={classNames("intro-section")}>
      <div className={classNames("intro-section__container")}>
        <p className={classNames("intro-section__paragraph")}>
          Cześć, jestem Jagoda - dietetyczka z własną historią.
        </p>
        <p className={classNames("intro-section__paragraph")}>
          Tworzę smaczne i skuteczne plany żywieniowe, które pomagają polepszyć wyniki badań, zwiększyć energię i poprawić samopoczucie.
        </p>
        <button className={classNames("intro-section__button")}>Umów wizytę</button>
      </div>
    </section>
  );
}

import classNames from "classnames";
import "./CompetenciesSection.scss";

export default function CompetenciesSection() {
  return (
    <section className={classNames("competencies-section")}>
      <div className={classNames("competencies-section__container")}>
        <h2 className={classNames("competencies-section__title")}>Kompetencje</h2>
        <div className={classNames("competencies-section__list")}>
          <div className={classNames("competencies-section__item")}>
            <p>Analiza wyników badań</p>
            <p>95%</p>
          </div>
          <div className={classNames("competencies-section__item")}>
            <p>Diety Low FODMAP</p>
            <p>90%</p>
          </div>
          <div className={classNames("competencies-section__item")}>
            <p>IO i PCOS</p>
            <p>95%</p>
          </div>
          <div className={classNames("competencies-section__item")}>
            <p>Psychodietetyka</p>
            <p>95%</p>
          </div>
          <div className={classNames("competencies-section__item")}>
            <p>Żywienie sportowców</p>
            <p>80%</p>
          </div>
          <div className={classNames("competencies-section__item")}>
            <p>Zaburzenia tarczycy</p>
            <p>90%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

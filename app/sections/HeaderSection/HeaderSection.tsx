import classNames from "classnames";
import "./HeaderSection.scss";

export default function HeaderSection() {
  return (
    <section className={classNames("header-section")}>
      <div className={classNames("header-section__background")}></div>
      <div className={classNames("header-section__content")}>
        <h1 className={classNames("header-section__title")}>Jagodowa Harmonia</h1>
      </div>
    </section>
  );
}

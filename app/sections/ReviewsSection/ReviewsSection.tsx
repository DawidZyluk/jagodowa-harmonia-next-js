import classNames from "classnames";
import "./ReviewsSection.scss";

export default function ReviewsSection() {
  return (
    <section className={classNames("reviews-section")}>
      <div className={classNames("reviews-section__container")}>
        <h2 className={classNames("reviews-section__title")}>Opinie podopiecznych</h2>
        <p className={classNames("reviews-section__paragraph")}>Realne rezultaty i zadowolenie klientów motywują najbardziej.</p>
      </div>
    </section>
  );
}

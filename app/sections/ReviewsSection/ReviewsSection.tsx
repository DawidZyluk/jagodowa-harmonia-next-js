import styles from "./ReviewsSection.module.scss";

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Opinie podopiecznych</h2>
        <p className={styles.paragraph}>Realne rezultaty i zadowolenie klientów motywują najbardziej.</p>
      </div>
    </section>
  );
}


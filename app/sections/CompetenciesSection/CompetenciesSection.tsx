import styles from "./CompetenciesSection.module.scss";

export default function CompetenciesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Kompetencje</h2>
        <div className={styles.competenciesList}>
          <div className={styles.competencyItem}>
            <p>Analiza wyników badań</p>
            <p>95%</p>
          </div>
          <div className={styles.competencyItem}>
            <p>Diety Low FODMAP</p>
            <p>90%</p>
          </div>
          <div className={styles.competencyItem}>
            <p>IO i PCOS</p>
            <p>95%</p>
          </div>
          <div className={styles.competencyItem}>
            <p>Psychodietetyka</p>
            <p>95%</p>
          </div>
          <div className={styles.competencyItem}>
            <p>Żywienie sportowców</p>
            <p>80%</p>
          </div>
          <div className={styles.competencyItem}>
            <p>Zaburzenia tarczycy</p>
            <p>90%</p>
          </div>
        </div>
      </div>
    </section>
  );
}


import styles from "./HeaderSection.module.scss";

export default function HeaderSection() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.parallaxBackground}></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Jagodowa Harmonia</h1>
      </div>
    </section>
  );
}


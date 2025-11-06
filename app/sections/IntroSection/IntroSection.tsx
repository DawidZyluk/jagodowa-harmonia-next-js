import styles from "./IntroSection.module.scss";

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Cześć, jestem Jagoda - dietetyczka z własną historią.
        </p>
        <p className={styles.paragraph}>
          Tworzę smaczne i skuteczne plany żywieniowe, które pomagają polepszyć wyniki badań, zwiększyć energię i poprawić samopoczucie.
        </p>
        <button className={styles.button}>Umów wizytę</button>
      </div>
    </section>
  );
}


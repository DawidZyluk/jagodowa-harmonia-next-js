import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Kontakt</h2>
        <p className={styles.subtitle}>Masz pytania lub chcesz umówić wizytę? Napisz lub zadzwoń.</p>
        
        <div className={styles.contactInfo}>
          <button className={styles.button}>Umów się online</button>
          <p>Telefon</p>
          <p className={styles.contactValue}>+48 789 162 740</p>
          <p>Gabinet</p>
          <p className={styles.contactValue}>al. Solidarności 117</p>
        </div>
      </div>
    </section>
  );
}


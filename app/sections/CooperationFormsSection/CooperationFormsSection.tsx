import styles from "./CooperationFormsSection.module.scss";

export default function CooperationFormsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Formy współpracy</h2>
        <p className={styles.subtitle}>Wybierz opcję dopasowaną do Twoich celów zdrowotnych.</p>
        
        <div className={styles.cooperationList}>
          <div className={styles.cooperationItem}>
            <h3>Spotkanie online lub stacjonarne z dietetykiem</h3>
            <p className={styles.itemSubtitle}>Online lub stacjonarnie</p>
            <p>Możesz wybrać formę współpracy, która najbardziej Ci odpowiada – zdalnie przez internet lub podczas spotkań twarzą w twarz. Dzięki temu dostosujemy sposób kontaktu do Twojego trybu życia i wygody, zapewniając jednocześnie pełne wsparcie.</p>
          </div>
          
          <div className={styles.cooperationItem}>
            <h3>Diet coaching, wizyty kontrolne - wsparcie i motywacja do zdrowych nawyków</h3>
            <p className={styles.itemSubtitle}>Diet coaching</p>
            <p>Diet coach to wsparcie na co dzień, które pomaga w utrzymaniu motywacji i wprowadzaniu zdrowych nawyków żywieniowych. Razem wypracujemy plan działania, który będzie realny do realizacji i dostosowany do Twojego stylu życia.</p>
          </div>
          
          <div className={styles.cooperationItem}>
            <h3>Jednorazowa konsultacja dietetyczna - szybka porada żywieniowa</h3>
            <p className={styles.itemSubtitle}>Jednorazowa konsultacja dietetyczna</p>
            <p>Jeśli potrzebujesz szybkiej porady lub wskazówek dotyczących diety, jednorazowa konsultacja będzie idealnym rozwiązaniem. Otrzymasz indywidualne zalecenia, które pomogą Ci lepiej zrozumieć swoje potrzeby żywieniowe i podjąć świadome decyzje.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


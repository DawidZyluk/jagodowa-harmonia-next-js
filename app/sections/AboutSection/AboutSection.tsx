import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>O mnie</h2>
        <p className={styles.paragraph}>
          Portret Jagody, certyfikowanej dietetyczki i edukatorki żywieniowejJagoda podczas konsultacji dietetycznej w gabinecie w Warszawie
        </p>
        <p className={styles.paragraph}>
          Nazywam się Jagoda i jestem certyfikowanym dietetykiem z wykształceniem w chemii medycznej. Pomagam osobom nie tylko schudnąć, ale przede wszystkim poprawić zdrowie i samopoczucie - bez głodówek, z realnym, dopasowanym planem. Wspieram pacjentów z chorobami dietozależnymi, ponieważ sama wyszłam z zaburzeń odżywiania oraz zmagam się z niedoczynnością tarczycy. Dzięki własnym doświadczeniom rozumiem, jak ważne jest indywidualne podejście, uwzględniające fizjologię i stan zdrowia, a nie tylko kalorie. Wiem też, jak trudne bywa wsparcie ze strony otoczenia i jak ważne jest bez oceniania. Przeszłam przez zaburzenia odżywiania, więc potrafię pomagać także osobom z trudną relacją z jedzeniem. W mojej pracy patrzę na człowieka całościowo - z uwzględnieniem historii, emocji i potrzeb.
        </p>
        <button className={styles.button}>Sprawdź kompetencje</button>
      </div>
    </section>
  );
}


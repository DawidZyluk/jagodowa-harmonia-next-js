import classNames from "classnames";
import "./ServicesSection.scss";

export default function ServicesSection() {
  return (
    <section className={classNames("services-section")}>
      <div className={classNames("services-section__container")}>
        <h2 className={classNames("services-section__title")}>Usługi dietetyczne</h2>
        <p className={classNames("services-section__subtitle")}>Spotkania online lub w gabinecie w Warszawie.</p>
        
        <div className={classNames("services-section__list")}>
          <div className={classNames("services-section__item")}>
            <h3>Kawka z Dietetykiem</h3>
            <p>To darmowa, krótka rozmowa, podczas której możesz zadać pytania i sprawdzić, czy moje podejście Ci odpowiada.</p>
          </div>
          
          <div className={classNames("services-section__item")}>
            <h3>Konsultacja wstępna</h3>
            <p>Podczas indywidualnej konsultacji analizuję stan zdrowia, styl życia i nawyki żywieniowe. Tworzę plan wspierający leczenie i profilaktykę chorób dietozależnych.</p>
          </div>
          
          <div className={classNames("services-section__item")}>
            <h3>Jadłospis Otwarty</h3>
            <p>To plan żywieniowy z bazą produktów dopasowanych do Twoich potrzeb zdrowotnych. Samodzielnie komponujesz menu, zachowując elastyczność i kontrolę.</p>
          </div>
          
          <div className={classNames("services-section__item")}>
            <h3>Jadłospis Zamknięty</h3>
            <p>Spersonalizowany plan diety z przepisami, zdjęciami i dokładnymi proporcjami. Gotowe, wygodne rozwiązanie dla osób oczekujących konkretnych efektów.</p>
          </div>
          
          <div className={classNames("services-section__item")}>
            <h3>Diet coaching</h3>
            <p>Monitorujemy postępy i pracujemy nad nawykamim, motywacją i relacją z jedzeniem. Regularne spotkania zwiększają skuteczność terapii i pomagają utrzymać efekty.</p>
          </div>
          
          <div className={classNames("services-section__item")}>
            <h3>Analiza Składu Ciała</h3>
            <p>To szybkie, bezinwazyjne badanie określające zawartość tłuszczu, mięśni, wody i wiek metaboliczny. Pomaga zrozumieć swoje ciało i rozpocząć dietę opartą na faktach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

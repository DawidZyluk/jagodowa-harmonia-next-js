import classNames from "classnames";
import "./ServicesSection.scss";

type Service = {
  id: number;
  title: string;
  description: string;
  accent: string;
  icon: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Kawka z dietetykiem",
    description:
      "Darmowa, 20-minutowa rozmowa online. Poznasz moje podejście i sprawdzisz, czy czujesz się komfortowo, zanim podejmiemy współpracę.",
    accent: "bezpłatna konsultacja wstępna",
    icon: "☕",
  },
  {
    id: 2,
    title: "Konsultacja wstępna",
    description:
      "Analiza wyników badań, historii zdrowia i stylu życia. Otrzymasz zalecenia żywieniowe, plan działania i wskazówki, od czego zacząć.",
    accent: "60 minut / online lub gabinet",
    icon: "🩺",
  },
  {
    id: 3,
    title: "Jadłospis otwarty",
    description:
      "Elastyczny plan z bazą produktów i gotowymi kombinacjami posiłków, który możesz samodzielnie modyfikować według apetytu i grafiku.",
    accent: "idealny dla zabieganych",
    icon: "📝",
  },
  {
    id: 4,
    title: "Jadłospis zamknięty",
    description:
      "7- lub 14-dniowy jadłospis z gramaturami, listą zakupów i zdjęciami potraw. Wybór dla osób, które chcą mieć wszystko rozpisane.",
    accent: "pełna personalizacja",
    icon: "🍽️",
  },
  {
    id: 5,
    title: "Diet coaching",
    description:
      "Regularne spotkania, w których pracujemy nad nawykami, wsparciem emocjonalnym i motywacją. Utrzymujemy efekty i uczymy elastyczności.",
    accent: "strategia krok po kroku",
    icon: "🌿",
  },
  {
    id: 6,
    title: "Analiza składu ciała",
    description:
      "Badanie na analizatorze InBody, które pokazuje zawartość mięśni, tłuszczu, wody i wiek metaboliczny. Podstawa do wdrożenia terapii.",
    accent: "wyniki na miejscu",
    icon: "📊",
  },
];

export default function ServicesSection() {
  return (
    <section className={classNames("services-section")} id="services">
      <div className={classNames("services-section__container")}>
        <div className={classNames("services-section__intro")}>
          <h2 className={classNames("services-section__title")}>Usługi dietetyczne</h2>
          <p className={classNames("services-section__subtitle")}>
            Spotkania online i w gabinecie w Warszawie. Wybierz formę, która najlepiej pasuje do Twoich potrzeb i stylu życia.
          </p>
        </div>

        <ul className={classNames("services-section__list")}>
          {services.map((service) => (
            <li key={service.id} className={classNames("services-card")}>
              <span className={classNames("services-card__icon")} aria-hidden="true">
                {service.icon}
              </span>
              <div className={classNames("services-card__content")}>
                <span className={classNames("services-card__accent")}>{service.accent}</span>
                <h3 className={classNames("services-card__title")}>{service.title}</h3>
                <p className={classNames("services-card__description")}>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={classNames("services-section__note")}>
          <p>
            Nie wiesz, od czego zacząć? Zacznij od spotkania „Kawka z dietetykiem” – sprawdzimy wspólnie, jaka forma współpracy będzie
            najlepsza.
          </p>
        </div>
      </div>
    </section>
  );
}

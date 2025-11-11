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
      "Pełna analiza Twojego sposobu żywienia, wyników badań i stylu życia. Otrzymasz indywidualne zalecenia i wskazówki krok po kroku w ciągu 5 dni roboczych.",
    accent: "60 minut / online lub gabinet",
    icon: "🩺",
  },
  {
    id: 3,
    title: "Jadłospis otwarty",
    description:
      "Elastyczny plan z bazą produktów i kombinacjami posiłków w Twoich makroskładnikach - Ty komponujesz posiłki według własnych preferencji.",
    accent: "idealny dla zabieganych",
    icon: "📝",
  },
  {
    id: 4,
    title: "Jadłospis zamknięty",
    description:
      "Gotowy plan z przepisami, zdjęciami i listą zakupów - dopasowany do Twojego stylu życia i dolegliwości. Wybór dla osób, które chcą mieć wszystko rozpisane.",
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
      "Badanie na analizatorze TANITA, które pokazuje zawartość mięśni, tłuszczu, wody i wiek metaboliczny. Podstawa do wdrożenia terapii.",
    accent: "wyniki na miejscu",
    icon: "📊",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__container">
        <div className="services-section__intro">
          <h2 className="services-section__title">Usługi dietetyczne</h2>
          <p className="services-section__subtitle">
            Wybierz formę współpracy - konsultację dietetyczną online lub spotkanie w gabinecie - dopasowaną do Twoich potrzeb i stylu życia.
          </p>
        </div>

        <ul className="services-section__list">
          {services.map((service) => (
            <li key={service.id} className="services-card">
              <span className="services-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <div className="services-card__content">
                <span className="services-card__accent">{service.accent}</span>
                <h3 className="services-card__title">{service.title}</h3>
                <p className="services-card__description">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="services-section__note">
          <p>
            Nie wiesz, od czego zacząć? Zacznij od spotkania „Kawka z dietetykiem" - sprawdzimy wspólnie, jaka forma współpracy będzie
            najlepsza.
          </p>
        </div>
      </div>
    </section>
  );
}

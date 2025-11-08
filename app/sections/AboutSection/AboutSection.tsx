import classNames from "classnames";
import { GiHeartOrgan } from "react-icons/gi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LuBrain, LuLeaf, LuStethoscope } from "react-icons/lu";
import { RiRunLine } from "react-icons/ri";
import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section className={classNames("about-section")} id="about">
      <div className={classNames("about-section__content")}>
        <div className={classNames("about-section__media")}>
          <div className={classNames("about-section__image")}>
            <img src="/4.jpg" alt="Jagoda podczas konsultacji dietetycznej" />
          </div>
        </div>

        <div className={classNames("about-section__copy")}>
          <p className={classNames("about-section__eyebrow")}>O mnie</p>
          <h2 className={classNames("about-section__title")}>
            Rozumiem zdrowie nie tylko z książek, ale przede wszystkim z własnego doświadczenia
          </h2>
          <p className={classNames("about-section__paragraph")}>
            Nazywam się Jagoda i jestem certyfikowanym dietetykiem z wykształceniem w chemii medycznej.
            Pomagam osobom nie tylko schudnąć, ale przede wszystkim poprawić zdrowie i samopoczucie –
            bez głodówek, z realnym, dopasowanym planem. Wspieram pacjentów z chorobami dietozależnymi,
            ponieważ sama wyszłam z zaburzeń odżywiania oraz zmagam się z niedoczynnością tarczycy.
            Dzięki własnym doświadczeniom rozumiem, jak ważne jest indywidualne podejście, uwzględniające
            fizjologię i stan zdrowia, a nie tylko kalorie. Wiem też, jak trudne bywa wsparcie ze strony
            otoczenia i jak ważne jest bez oceniania.
          </p>
        </div>
      </div>

      <div className={classNames("about-section__metrics")}>
        <div className={classNames("about-section__metrics-background")} aria-hidden />

        <div className={classNames("about-section__metrics-content")}>
          <h2 className={classNames("about-section__metrics-title")}>Kompetencje</h2>
          <div className={classNames("about-section__metrics-grid")}>
            {metrics.map(({ label, Icon }) => (
              <div key={label} className={classNames("about-section__metric-card")}>
                <div className={classNames("about-section__metric-icon")}>
                  <Icon aria-hidden />
                </div>
                <p className={classNames("about-section__metric-label")}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const metrics = [
  { label: "Analiza wyników badań", Icon: HiOutlineChartBar },
  { label: "Diety Low FODMAP", Icon: LuLeaf },
  { label: "IO i PCOS", Icon: GiHeartOrgan },
  { label: "Psychodietetyka", Icon: LuBrain },
  { label: "Żywienie sportowców", Icon: RiRunLine },
  { label: "Zaburzenia tarczycy", Icon: LuStethoscope },
];

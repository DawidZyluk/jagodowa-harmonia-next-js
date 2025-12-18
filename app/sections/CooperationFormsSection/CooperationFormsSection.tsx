import "./CooperationFormsSection.scss";

export default function CooperationFormsSection() {
  return (
    <section className="cooperation-forms-section" id="cooperation">
      <div className="cooperation-forms-section__container">
        <h2 className="cooperation-forms-section__title">Formy współpracy</h2>
        <p className="cooperation-forms-section__subtitle">Wybierz opcję dopasowaną do Twoich celów zdrowotnych.</p>
        
        <div className="cooperation-forms-section__list">
          <div className="cooperation-forms-section__item">
            <div className="cooperation-forms-section__item-media">
              <img src="/stolik.jpg" alt="Współpraca z dietetykiem przy stole" />
            </div>
            <div className="cooperation-forms-section__item-content">
              <h3>Pakiety współpracy dietetycznej online</h3>
              <p className="cooperation-forms-section__item-subtitle">Online</p>
              <p>Dla kobiet, które chcą kompleksowej opieki i wsparcia w zmianie stylu życia.
W ramach pakietu otrzymasz regularne konsultacje, stały kontakt przez WhatsApp, check-iny co kilka dni oraz indywidualny jadłospis dopasowany do Twojego zdrowia i celów. Razem nauczymy Twoje ciało współpracy, a nie walki - z troską, spokojem i zrozumieniem.
</p>
            </div>
          </div>
          
          <div className="cooperation-forms-section__item">
            <div className="cooperation-forms-section__item-media">
              <img src="/laptop.jpg" alt="Konsultacja online z dietetykiem" />
            </div>
            <div className="cooperation-forms-section__item-content">
              <h3>Pojedyncze spotkanie z dietetykiem</h3>
              <p className="cooperation-forms-section__item-subtitle">Szybka i konkretna porada</p>
              <p>Dla osób, które potrzebują jednorazowej analizy, wskazówek lub pomocy w interpretacji wyników badań.
W trakcie spotkania omówimy Twoje nawyki, styl życia, objawy i zdrowie hormonalne.
Otrzymasz indywidualne zalecenia, które pomogą Ci wprowadzić pierwsze zmiany - bez presji, ale z konkretnym planem działania.</p>
            </div>
          </div>
          
          <div className="cooperation-forms-section__item">
            <div className="cooperation-forms-section__item-media">
              <img src="/f.jpg" alt="Zdrowe bowle na słodko z owocami i orzechami - przykład z indywidualnego jadłospisu dietetycznego online" />
            </div>
            <div className="cooperation-forms-section__item-content">
              <h3>Jadłospisy indywidualne</h3>
              <p className="cooperation-forms-section__item-subtitle">Dopasowany do Ciebie</p>
              <p>Stworzony w oparciu o Twoje potrzeby zdrowotne, preferencje, wyniki badań i styl życia.
Możesz wybrać jadłospis otwarty - elastyczny plan makroskładników, lub jadłospis zamknięty - gotowe przepisy i listy zakupów.
Każdy plan jest indywidualny i wspiera Twoje cele: równowagę hormonalną, lepsze trawienie, poprawę wyników i więcej energii na co dzień.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

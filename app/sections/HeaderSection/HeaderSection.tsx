import Button from "@/app/components/Button/Button";
import { createBemClassNames } from "../../utils";
import "./HeaderSection.scss";

export default function HeaderSection() {
  const classNames = createBemClassNames(
    "header-section",
    undefined,
    "background",
    "content",
    "title",
    "description"
  );

  return (
    <section className={classNames["header-section"]}>
      <div className={classNames.background}></div>
      <div className={classNames.content}>
        <h1 className={classNames.title}>Cześć, jestem Jagoda - dietetyczka z własną historią.</h1>
        <p className={classNames.description}>Tworzę smaczne i skuteczne plany żywieniowe, które pomagają polepszyć wyniki badań, zwiększyć energię i poprawić samopoczucie.</p>
        <Button>Umów wizytę</Button>
      </div>
    </section>
  );
}

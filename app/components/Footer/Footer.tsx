import classNames from "classnames";
import Link from "next/link";
import "./Footer.scss";
import { socialLinks } from "../../utils/socialLinks";

export default function Footer() {
  return (
    <footer className={classNames("footer")}>
      <div className={classNames("footer__container")}>
        <p className={classNames("footer__copyright")}>
          © 2025 Jagoda Giedrojć - Poradnia Dietetyczna
        </p>
        <div className={classNames("footer__social")} aria-label="Media społecznościowe">
          {socialLinks.map(({ href, label, key, Icon }) => (
            <Link
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={classNames(`footer__social-link footer__social-link--${key}`)}
            >
              <Icon aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";
import "./Button.scss";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const isLinkButtonProps = (props: ButtonProps): props is LinkButtonProps =>
  typeof (props as LinkButtonProps).href === "string";

const Button = (props: ButtonProps) => {
  if (isLinkButtonProps(props)) {
    const {
      href,
      className,
      children,
      target = "_blank",
      rel,
      ...anchorProps
    } = props;
    const relValue =
      rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <Link
        href={href}
        className={className ? `button ${className}` : "button"}
        target={target}
        rel={relValue}
        {...anchorProps}
      >
        <span className="button__text">{children}</span>
      </Link>
    );
  }

  const { className, children, type = "button", ...buttonProps } = props;

  return (
    <button
      className={className ? `button ${className}` : "button"}
      type={type}
      {...buttonProps}
    >
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
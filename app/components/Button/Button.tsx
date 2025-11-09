import Link from "next/link";
import classNames from "classnames";
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
        className={classNames("button", className)}
        target={target}
        rel={relValue}
        {...anchorProps}
      >
        <span className={classNames("button__text")}>{children}</span>
      </Link>
    );
  }

  const { className, children, type = "button", ...buttonProps } = props;

  return (
    <button
      className={classNames("button", className)}
      type={type}
      {...buttonProps}
    >
      <span className={classNames("button__text")}>{children}</span>
    </button>
  );
};

export default Button;
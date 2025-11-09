import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    key: "facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    key: "instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    key: "linkedin",
    Icon: FaLinkedinIn,
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];


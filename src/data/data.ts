import { Nav } from "../types/Nav";
import { Socials } from "../types/Socials";
import {
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: Nav[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "services",
    link: "/services",
  },
];

export const socials: Socials[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+201022153359",
    icon: FaWhatsapp,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icon: FaXTwitter,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "behance",
    url: "https://www.behance.com/",
    icon: FaBehance,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "snapchat",
    url: "https://www.snapchat.com/",
    icon: FaSnapchatGhost,
  },
];

import { SITE_EMAIL, SITE_PHONE, SITE_URL } from "@/extra/siteDetails";

export interface IContact {
  title: string;
  icon: string;
  phone?: string;
  email?: string;
  url?: string;
}

export const contact: IContact[] = [
  {
    title: "Call Us",
    icon: "fi fi-br-phone-flip",
    phone: SITE_PHONE,
  },
  {
    title: "Email Us",
    icon: "fi fi-br-envelope",
    email: SITE_EMAIL,
  },
  {
    title: "Visit Us",
    icon: "fi fi-br-land-layer-location",
    url: SITE_URL,
  },
];

export const newsShareLinks = [
  {
    name: "Email",
    icon: "fi-rr-envelope",
    getUrl: (url: string) =>
      `mailto:?subject=Check this out&body=${encodeURIComponent(url)}`,
  },
  {
    name: "Facebook",
    icon: "fi-brands-facebook",
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "LinkedIn",
    icon: "fi-brands-linkedin",
    getUrl: (url: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}`,
  },
  {
    name: "WhatsApp",
    icon: "fi-brands-whatsapp",
    getUrl: (url: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
  },
  {
    name: "Messenger",
    icon: "fi-brands-messenger",
    getUrl: (url: string) =>
      `fb-messenger://share?link=${encodeURIComponent(url)}`,
  },
];

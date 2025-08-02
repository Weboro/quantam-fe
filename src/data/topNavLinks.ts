interface ISocialLink {
  name: string;
  icon: string;
  url: string;
}

interface ITopLink {
  name: string;
  url: string;
  redirect?: boolean;
}

export const socialLinks: ISocialLink[] = [
  {
    name: "facebook",
    icon: "fi fi-brands-facebook",
    url: "#",
  },
  {
    name: "Youtube",
    icon: "fi fi-brands-youtube",
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: "fi fi-brands-linkedin",
    url: "#",
  },
];

export const topLinks: ITopLink[] = [
  {
    name: "Programs",
    url: "/programs",
    redirect: false,
  },
  {
    name: "Find Agent",
    url: "/find-agent",
    redirect: false,
  },
  {
    name: "QHIE Students",
    url: "qihe-students",
    redirect: false,
  },
  {
    name: "Discover QHIE",
    url: "discover-qihe",
    redirect: false,
  },
];

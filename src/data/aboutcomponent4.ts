export interface AboutComponent4Props {
  sectionTitle: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  image: {
    src: string;
    alt: string;
  };
  layout?: "left" | "right";
}

export const aboutComponent4Data: AboutComponent4Props = {
  sectionTitle: "About Us",
  mainTitle: "Your Journey Starts Here",
  subtitle:
    "Explore our programs, discover our campus, and take the first step toward your future with QIHE.",
  description:
    "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user with important content and expects a response.",
  primaryButton: {
    text: "Apply Now",
    link: "/apply",
  },
  secondaryButton: {
    text: "Explore Programs",
    link: "/programs",
  },
  image: {
    src: "/banner.png",
    alt: "Graduate student in cap and gown holding diploma",
  },
  layout: "right",
};

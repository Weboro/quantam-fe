export interface AboutUsProps {
  sectionTitle: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  textAlign?: "left" | "center";
}

export const aboutUsInfo: AboutUsProps = {
  sectionTitle: "About Us",
  title: "About Our Programs",
  subtitle: "And our course of action.",
  description:
    "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
  buttonText: "Learn More",
  buttonLink: "/about",
  textAlign: "left",
};

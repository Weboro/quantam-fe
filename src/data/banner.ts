export interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  textAlign?: "left" | "center";
}

export const quantumBanner: BannerProps = {
  title: "Welcome to Quantum Institute of Higher Education",
  subtitle: "",
  description:
    "At Quantum Institute of Higher Education (QIHE), we are dedicated to providing quality education that empowers our students to succeed in a dynamic and evolving world.",
  buttonText: "Get Started",
  buttonLink: "/get-started",
  imageUrl: "/banner.png",
  textAlign: "left",
};

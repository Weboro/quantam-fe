export interface IFaqBox {
  title: string;
  subtitle: string;
  description: string;
  email: string;

  contactButtonText: string;
}

export const faqBoxData: IFaqBox = {
  title: "Did not find what you want?",
  subtitle: "We are here to help!",
  description:
    "If you can't find the answer you're looking for below, please send us a question, call us on 12345678 or chat with us online.",
  email: "help@quantam.com.au",

  contactButtonText: "Contact Us",
};

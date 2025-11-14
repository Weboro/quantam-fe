export interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const faq: IFaq[] = [
  {
    id: 1,
    question: "What programs does QIHE offer?",
    answer:
      "QIHE offers undergraduate programs in Business and Information Technology. Business majors include Accounting, Information Systems, and Hospitality.",
  },
  {
    id: 2,
    question: "Where is QIHE located?",
    answer:
      "QIHE is located at Level 4, 16-18 Wentworth Street, Parramatta NSW 2150, offering students convenient access to public transport, local amenities, and opportunities to engage with the community.",
  },
  {
    id: 3,
    question: "What are the entry requirements for international students?",
    answer:
      "International students are required to demonstrate qualifications equivalent to Australian Year 12, a Certificate IV or higher, or an International Baccalaureate diploma (Minimum 24 points ) as recognised by the Australion Government Department of Education's Country Education Profiles (CEP), submit the necessary documentation, and satisfy the Genuine Student Requirement (GSR).",
  },
  {
    id: 4,
    question: "What are the English language requirements at QIHE?",
    answer:
      " <p> International applicants must demonstrate English proficiency with one of the following: IELTS (Academic) 6.0 overall with no band below 5.5, TOEFL iBT minimum 60, or PTE Academic minimum 55. </p> <br> <p> For more detailed information, please refer to <a href='/programs' class='italic underline text-brand-primary '>Our Programs</a> page for Admission Requirements, or <a href='/contact' class='italic underline text-brand-primary'>Contact Us</a> for further assistance. </p>",
  },
  {
    id: 5,
    question: "Does QIHE recognise prior learning or work experience?",
    answer:
      "<p>Yes. Students may apply for Advanced Standing or Credit Transfer based on relevant prior learning, work experience, or qualifications that align with course outcomes. Decisions are made in accordance with AQF level descriptors to ensure equivalency in knowledge, skills, and application. </p> <br> <p>For further details, please refer to the <a href='/policies-and-procedures/Advanced%20Standing%2C%20Credit%20Transfer%20and%20Articulation%20Policy.pdf'  class='italic underline text-brand-primary ' ><i>Advanced Standing, Credit Transfer and Articulation Policy</i></a>, or <a href='/contact' class='italic underline text-brand-primary'>Contact Us </a> for further assistance.</p>",
  },
  {
    id: 6,
    question: "What support services are available at QIHE?",
    answer:
      "<p>QIHE provides academic and non-academic support services to help students succeed in their studies, wellbeing, and personal development.</p> <br> <p>For more information, please refer to the <a href='/policies-and-procedures/Student%20Support%20and%20Consultation%20Policy.pdf' class='italic underline text-brand-primary'>Student Support and Consultation <i>Policy</i></a>, or <a href='/contact' class='italic underline text-brand-primary'>Contact Us</a> for further assistance.</p>",
  },
  {
    id: 7,
    question: "How does the admission process work at QIHE?",
    answer:
      "<p>Applicants must submit a completed Admission Application Form along with certified documents. Admission outcomes are issued in writing and may include a full or conditional Letter of Offer.</p>  <br>  <p>For more information, please refer to the <a href='/policies-and-procedures/Assessment%20Policy%20and%20Procedure.pdf' class='italic underline text-brand-primary'><i> Assessment Policy and Procedure</i></a>, or <a href='/contact' class='italic underline text-brand-primary'>Contact Us</a> for further assistance.</p>",
  },
  {
    id: 8,
    question: "What are the delivery methods for the programs?",
    answer:
      "All programs are delivered full-time, on-campus, and face-to-face, with no work-based training involved, ensuring an immersive and supportive learning experience focused entirely on academic and professional skill development.",
  },
  {
    id: 9,
    question: "How can I apply for a student visa to study in Australia?",
    answer:
      "<p>You can find the most up-to-date information on student visa requirements and the application process at  <a href='https://homeaffairs.gov.au' class='italic underline text-brand-primary'>homeaffairs.gov.au</a>.   </p>",
  },
  {
    id: 10,
    question: "Can I apply for my student visa through an education agent?",
    answer:
      "<p>Absolutely, QIHE works with trusted education agents who can help you with your application. Visit <a href='/future-students/find-agent' class='italic underline text-brand-primary'>Find Agent</a> to find an agent near you.</p>",
  },
];

export default faq;


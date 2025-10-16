export interface CampusData {
  location: {
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    transport: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  safety: {
    title: string;
    description: string;
    policies: string[];
    healthSafety: {
      title: string;
      points: string[];
    };
  };
  emergencyContacts: {
    title: string;
    contacts: {
      name: string;
      number: string;
      description?: string;
      emergency?: boolean;
    }[];
  };
  localServices: {
    title: string;
    sections: {
      title: string;
      services: {
        name: string;
        address: string;
        phone: string;
      }[];
    }[];
  };
  supportServices: {
    title: string;
    services: {
      name: string;
      number: string;
      description: string;
    }[];
  };
}

export const campusData: CampusData = {
  location: {
    title: "Campus Location & Directions",
    description:
      "QIHE's campus is located in the vibrant heart of Parramatta, one of Western Sydney's busiest and most exciting areas. The campus is just a 5-minute walk from Parramatta Train Station, making it easy for students to get here using public transport.",
    address: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    phone: "(+61) 2 8359 5220",
    email: "admin@qinstitute.com.au",
    website: "qinstitute.com.au",
    transport: [
      {
        icon: "train",
        title: "By Train",
        description:
          "Arrive at Parramatta Station and enjoy a short, easy walk to campus.",
      },
      {
        icon: "bus",
        title: "By Bus",
        description:
          "Parramatta is a major bus hub, with multiple routes stopping close to campus for convenient access.",
      },
      {
        icon: "car",
        title: "By Car",
        description:
          "Limited parking is available nearby; however, public transport is usually the quickest and most convenient option.",
      },
      {
        icon: "walk",
        title: "Walking or Cycling",
        description:
          "Parramatta is pedestrian-friendly, with safe walking paths and bike lanes for students who prefer to cycle.",
      },
    ],
  },
  safety: {
    title: "Campus Safety",
    description:
      "Your safety and wellbeing are our top priority. QIHE maintains a safe and healthy campus through clear policies, regular training, and rapid response to risks or incidents.",
    policies: [
      "Health and Safety Policy",
      "Emergency Management Policy",
      "Critical Incident Plan",
    ],
    healthSafety: {
      title: "Health, Safety and Critical Incidents",
      points: [
        "QIHE is committed to maintaining a safe and healthy environment in line with the Work Health and Safety Act 2011 (NSW)",
        "Critical Incident Management Plan for emergencies",
        "Priority on student safety with access to counselling and wellbeing services",
        "Health and safety information provided during Orientation",
      ],
    },
  },
  emergencyContacts: {
    title: "Emergency Contacts",
    contacts: [
      {
        name: "Police, Fire, Ambulance",
        number: "000",
        description: "Life-threatening emergencies",
        emergency: true,
      },
      {
        name: "QIHE Student Services Manager",
        number: "TBA",
        emergency: false,
      },
      {
        name: "NSW State Emergency Service (SES)",
        number: "132 500",
        description: "Floods, storms, natural disasters",
        emergency: false,
      },
      {
        name: "Poisons Information Centre",
        number: "13 11 26",
        emergency: false,
      },
      {
        name: "Health direct Australia",
        number: "1800 022 222",
        description: "24/7 health advice and medical assistance",
        emergency: false,
      },
      {
        name: "National Security Hotline",
        number: "1800 123 400",
        description: "Report suspicious activity or threats",
        emergency: false,
      },
    ],
  },
  localServices: {
    title: "Local Parramatta Services",
    sections: [
      {
        title: "Hospitals (24/7 Emergency Departments)",
        services: [
          {
            name: "Westmead Hospital",
            address: "Hawkesbury Road, Westmead NSW 2145",
            phone: "(02) 8890 5555",
          },
          {
            name: "Westmead Children's Hospital",
            address: "Hawkesbury Road, Westmead NSW 2145",
            phone: "(02) 9845 0000",
          },
        ],
      },
      {
        title: "Medical Centres (General Practice)",
        services: [
          {
            name: "Parramatta Medical Centre",
            address: "451 Church Street, Parramatta NSW 2150",
            phone: "(02) 9635 8282",
          },
          {
            name: "Myhealth Medical Centre",
            address: "Level 2, Westfield Parramatta NSW 2150",
            phone: "(02) 7809 8800",
          },
        ],
      },
      {
        title: "Police",
        services: [
          {
            name: "Parramatta Police Station",
            address: "12 Charles Street, Parramatta NSW 2150",
            phone: "(02) 9633 0799",
          },
        ],
      },
    ],
  },
  supportServices: {
    title: "State and National Support Services",
    services: [
      {
        name: "Lifeline",
        number: "13 11 14",
        description: "24/7 crisis support and suicide prevention",
      },
      {
        name: "NSW Mental Health Line",
        number: "1800 011 511",
        description: "24/7 mental health support",
      },
      {
        name: "1800RESPECT",
        number: "1800 737 732",
        description: "Sexual assault and domestic violence support",
      },
      {
        name: "NSW Rape Crisis Centre",
        number: "1800 424 017",
        description: "Support for sexual violence survivors",
      },
      {
        name: "Red Cross Emergency Services",
        number: "1800 733 276",
        description: "Disaster relief and recovery support",
      },
      {
        name: "SafeWork NSW",
        number: "13 10 50",
        description: "Workplace health and safety concerns",
      },
      {
        name: "TIS National",
        number: "131 450",
        description: "Translating and interpreting service",
      },
    ],
  },
};

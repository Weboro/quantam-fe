export interface INews {
  id: number;
  imageUrl: '/box1.png';
  date: string;
  readTime: string;
  title: string;
  slug: string;
  summary: string;
  richText: string;
  author?: string;
  tags: string[];
}

export const news: INews[] = [
  {
    id: 1,
    imageUrl: '/box1.png',
    date: 'Jun 28, 2025',
    readTime: '2 mins read',
    title: 'Grand Opening of QIHE’s New Campus in Parramatta',
    slug: 'grand-opening-parramatta-campus',
    tags: ['event'],
    summary:
      'QIHE celebrated the grand opening of its state-of-the-art Parramatta campus, attended by faculty, students, and community leaders.',
    richText: `
      <p>We are thrilled to announce the official opening of our new campus at Level 4, 16-18 Wentworth Street, Parramatta NSW 2150. The modern facility features collaborative learning zones, digital labs, and vibrant student lounges.</p>
      <p>The ceremony was graced by local dignitaries and featured student performances, campus tours, and a keynote from our Chair, Prof. Jim Psaros.</p>
      <p><strong>“This campus represents our commitment to delivering quality education in an inclusive, forward-thinking environment,”</strong> said Prof. Psaros.</p>
  <div class="rich_text_second">
        <h3>Step 1: Understand the Student–Teacher Relationship</h3>
        <p>In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.</p>
        <ul>
          <li>Like students to use their first name (but it’s good to ask them first)</li>
          <li>Want students to ask questions and share different ideas (respectfully)</li>
          <li>Are happy to hear your opinion, even if it’s not the same as theirs</li>
          <li>Expect you to ask for help if you don’t understand something</li>
          <li>Act more like guides than strict authority figures</li>
          <li>Want students to take charge of their own learning</li>
          <li>Encourage open conversations, even in big classes</li>
          <li>Expect polite and respectful communication — both when speaking and in emails</li>
        </ul>
        <p><strong>Tip:</strong> In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.</p>
        <h3>Step 2: Navigating Campus Resources</h3>
        <p>Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.</p>
        <ul>
          <li>Visit the library and learn how to access digital resources</li>
          <li>Locate student support offices for academic and personal help</li>
          <li>Explore study spaces and computer labs</li>
          <li>Check out the campus map for key locations</li>
          <li>Attend orientation sessions to meet staff and other students</li>
        </ul>
        <p><strong>Tip:</strong> Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.</p>
        <h3>Step 3: Getting Involved in Student Life</h3>
        <p>Participating in student clubs and activities is a great way to make friends and enrich your university experience.</p>
        <ul>
          <li>Join a club or society that matches your interests</li>
          <li>Attend social events and workshops</li>
          <li>Volunteer for student-led initiatives</li>
          <li>Connect with student mentors for guidance</li>
        </ul>
        <p><strong>Tip:</strong> Check the student noticeboard or website for upcoming events and opportunities.</p>
      </div>
    `,
  },
  {
    id: 2,
    imageUrl: '/box1.png',
    date: 'Jul 5, 2025',
    readTime: '1 min read',
    title: 'Experts Discuss AI Trends at QIHE Panel Event',
    slug: 'ai-panel-event-2025',
    tags: ['ai'],
    summary:
      'Industry leaders joined our students for a panel on artificial intelligence, exploring ethical implications and future career paths.',
    richText: `
      <p>The <strong>“Future of AI in Education and Industry”</strong> panel featured speakers from leading tech companies and QIHE faculty. Topics included machine learning ethics, automation, and career readiness.</p>
      <p>Students had the opportunity to engage directly during a live Q&A session. The event was part of QIHE's Industry Engagement Series.</p>
  <div class="rich_text_second">
        <h3>Step 1: Understand the Student–Teacher Relationship</h3>
        <p>In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.</p>
        <ul>
          <li>Like students to use their first name (but it’s good to ask them first)</li>
          <li>Want students to ask questions and share different ideas (respectfully)</li>
          <li>Are happy to hear your opinion, even if it’s not the same as theirs</li>
          <li>Expect you to ask for help if you don’t understand something</li>
          <li>Act more like guides than strict authority figures</li>
          <li>Want students to take charge of their own learning</li>
          <li>Encourage open conversations, even in big classes</li>
          <li>Expect polite and respectful communication — both when speaking and in emails</li>
        </ul>
        <p><strong>Tip:</strong> In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.</p>
        <h3>Step 2: Navigating Campus Resources</h3>
        <p>Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.</p>
        <ul>
          <li>Visit the library and learn how to access digital resources</li>
          <li>Locate student support offices for academic and personal help</li>
          <li>Explore study spaces and computer labs</li>
          <li>Check out the campus map for key locations</li>
          <li>Attend orientation sessions to meet staff and other students</li>
        </ul>
        <p><strong>Tip:</strong> Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.</p>
        <h3>Step 3: Getting Involved in Student Life</h3>
        <p>Participating in student clubs and activities is a great way to make friends and enrich your university experience.</p>
        <ul>
          <li>Join a club or society that matches your interests</li>
          <li>Attend social events and workshops</li>
          <li>Volunteer for student-led initiatives</li>
          <li>Connect with student mentors for guidance</li>
        </ul>
        <p><strong>Tip:</strong> Check the student noticeboard or website for upcoming events and opportunities.</p>
      </div>
    `,
  },
  {
    id: 3,
    imageUrl: '/box1.png',
    date: 'Jul 15, 2025',
    readTime: '1 min read',
    title: 'Record-Breaking Enrolments for Semester 2, 2025',
    slug: 'record-enrolment-2025',
    tags: ['technology'],
    summary:
      'QIHE hits a new milestone with the highest-ever number of enrolments for Semester 2, driven by strong domestic and international interest.',
    richText: `
      <p>Quantum Institute of Higher Education has recorded its <strong>highest semester enrolment</strong> since establishment. More than 1,200 new students joined programs across Business and IT.</p>
      <p>CEO Dr. Alisha Morgan credits the growth to “targeted student support, international partnerships, and program innovation.”</p>
     <div class="rich_text_second">
        <h3>Step 1: Understand the Student–Teacher Relationship</h3>
        <p>In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.</p>
        <ul>
          <li>Like students to use their first name (but it’s good to ask them first)</li>
          <li>Want students to ask questions and share different ideas (respectfully)</li>
          <li>Are happy to hear your opinion, even if it’s not the same as theirs</li>
          <li>Expect you to ask for help if you don’t understand something</li>
          <li>Act more like guides than strict authority figures</li>
          <li>Want students to take charge of their own learning</li>
          <li>Encourage open conversations, even in big classes</li>
          <li>Expect polite and respectful communication — both when speaking and in emails</li>
        </ul>
        <p><strong>Tip:</strong> In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.</p>
        <h3>Step 2: Navigating Campus Resources</h3>
        <p>Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.</p>
        <ul>
          <li>Visit the library and learn how to access digital resources</li>
          <li>Locate student support offices for academic and personal help</li>
          <li>Explore study spaces and computer labs</li>
          <li>Check out the campus map for key locations</li>
          <li>Attend orientation sessions to meet staff and other students</li>
        </ul>
        <p><strong>Tip:</strong> Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.</p>
      </div>
    `,
  },
];

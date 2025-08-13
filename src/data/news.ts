export interface INews {
	id: number;
	imageUrl: '/banner.jpg';
	date: string;
	readTime: string;
	title: string;
	slug: string;
	summary: string;
	richText: string;
	author?: string;
	steps?: Array<{
		title: string;
		description: string;
		points: string[];
		tip?: string;
	}>;
}

export const news: INews[] = [
	{
		id: 1,
		imageUrl: '/banner.jpg',
		date: 'Jun 28, 2025',
		readTime: '2 mins read',
		title: 'Grand Opening of QIHE’s New Campus in Parramatta',
		slug: 'grand-opening-parramatta-campus',
		summary:
			'QIHE celebrated the grand opening of its state-of-the-art Parramatta campus, attended by faculty, students, and community leaders.',
		richText: `
      <p>We are thrilled to announce the official opening of our new campus in the heart of Parramatta. The modern facility features collaborative learning zones, digital labs, and vibrant student lounges.</p>
      <p>The ceremony was graced by local dignitaries and featured student performances, campus tours, and a keynote from our Chair, Prof. Jim Psaros.</p>
      <p><strong>“This campus represents our commitment to delivering quality education in an inclusive, forward-thinking environment,”</strong> said Prof. Psaros.</p>
    `,
		steps: [
			{
				title: 'Step 1: Understand the Student–Teacher Relationship',
				description:
					'In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.',
				points: [
					'Like students to use their first name (but it’s good to ask them first)',
					'Want students to ask questions and share different ideas (respectfully)',
					'Are happy to hear your opinion, even if it’s not the same as theirs',
					'Expect you to ask for help if you don’t understand something',
					'Act more like guides than strict authority figures',
					'Want students to take charge of their own learning',
					'Encourage open conversations, even in big classes',
					'Expect polite and respectful communication — both when speaking and in emails',
				],
				tip: 'In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.',
			},
			{
				title: 'Step 2: Navigating Campus Resources',
				description:
					'Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.',
				points: [
					'Visit the library and learn how to access digital resources',
					'Locate student support offices for academic and personal help',
					'Explore study spaces and computer labs',
					'Check out the campus map for key locations',
					'Attend orientation sessions to meet staff and other students',
				],
				tip: 'Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.',
			},
			{
				title: 'Step 3: Getting Involved in Student Life',
				description:
					'Participating in student clubs and activities is a great way to make friends and enrich your university experience.',
				points: [
					'Join a club or society that matches your interests',
					'Attend social events and workshops',
					'Volunteer for student-led initiatives',
					'Connect with student mentors for guidance',
				],
				tip: 'Check the student noticeboard or website for upcoming events and opportunities.',
			},
		],
	},
	{
		id: 2,
		imageUrl: '/banner.jpg',
		date: 'Jul 5, 2025',
		readTime: '1 min read',
		title: 'Experts Discuss AI Trends at QIHE Panel Event',
		slug: 'ai-panel-event-2025',
		summary:
			'Industry leaders joined our students for a panel on artificial intelligence, exploring ethical implications and future career paths.',
		richText: `
      <p>The <strong>“Future of AI in Education and Industry”</strong> panel featured speakers from leading tech companies and QIHE faculty. Topics included machine learning ethics, automation, and career readiness.</p>
      <p>Students had the opportunity to engage directly during a live Q&A session. The event was part of QIHE's Industry Engagement Series.</p>
    `,
		steps: [
			{
				title: 'Step 1: Understand the Student–Teacher Relationship',
				description:
					'In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.',
				points: [
					'Like students to use their first name (but it’s good to ask them first)',
					'Want students to ask questions and share different ideas (respectfully)',
					'Are happy to hear your opinion, even if it’s not the same as theirs',
					'Expect you to ask for help if you don’t understand something',
					'Act more like guides than strict authority figures',
					'Want students to take charge of their own learning',
					'Encourage open conversations, even in big classes',
					'Expect polite and respectful communication — both when speaking and in emails',
				],
				tip: 'In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.',
			},
			{
				title: 'Step 2: Navigating Campus Resources',
				description:
					'Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.',
				points: [
					'Visit the library and learn how to access digital resources',
					'Locate student support offices for academic and personal help',
					'Explore study spaces and computer labs',
					'Check out the campus map for key locations',
					'Attend orientation sessions to meet staff and other students',
				],
				tip: 'Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.',
			},
			{
				title: 'Step 3: Getting Involved in Student Life',
				description:
					'Participating in student clubs and activities is a great way to make friends and enrich your university experience.',
				points: [
					'Join a club or society that matches your interests',
					'Attend social events and workshops',
					'Volunteer for student-led initiatives',
					'Connect with student mentors for guidance',
				],
				tip: 'Check the student noticeboard or website for upcoming events and opportunities.',
			},
		],
	},
	{
		id: 3,
		imageUrl: '/banner.jpg',
		date: 'Jul 15, 2025',
		readTime: '1 min read',
		title: 'Record-Breaking Enrolments for Semester 2, 2025',
		slug: 'record-enrolment-2025',
		summary:
			'QIHE hits a new milestone with the highest-ever number of enrolments for Semester 2, driven by strong domestic and international interest.',
		richText: `
      <p>Quantum Institute of Higher Education has recorded its <strong>highest semester enrolment</strong> since establishment. More than 1,200 new students joined programs across Business and IT.</p>
      <p>CEO Dr. Alisha Morgan credits the growth to “targeted student support, international partnerships, and program innovation.”</p>
    `,
		steps: [
			{
				title: 'Step 1: Understand the Student–Teacher Relationship',
				description:
					'In Australia, students and teachers usually have a more relaxed and friendly relationship than in some other countries. Institutions like CIHE believe in equal treatment and encourage everyone to share their ideas and opinions.',
				points: [
					'Like students to use their first name (but it’s good to ask them first)',
					'Want students to ask questions and share different ideas (respectfully)',
					'Are happy to hear your opinion, even if it’s not the same as theirs',
					'Expect you to ask for help if you don’t understand something',
					'Act more like guides than strict authority figures',
					'Want students to take charge of their own learning',
					'Encourage open conversations, even in big classes',
					'Expect polite and respectful communication — both when speaking and in emails',
				],
				tip: 'In your first weeks, say ‘hello’ to your lecturers after class and ask how they prefer to communicate. This helps build a good connection and shows you are interested.',
			},
			{
				title: 'Step 2: Navigating Campus Resources',
				description:
					'Familiarize yourself with the campus facilities and support services available to you as a student. These resources are designed to help you succeed academically and personally.',
				points: [
					'Visit the library and learn how to access digital resources',
					'Locate student support offices for academic and personal help',
					'Explore study spaces and computer labs',
					'Check out the campus map for key locations',
					'Attend orientation sessions to meet staff and other students',
				],
				tip: 'Don’t hesitate to ask staff for a campus tour or directions if you’re unsure where to go.',
			},
		],
	},
];

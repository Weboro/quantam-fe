export interface TabSection {
	title: string;
	items: string[];
}

export interface TabContent {
	title: string;
	description: string;
	sections: TabSection[];
}

export interface TabData {
	[key: string]: TabContent;
}

export const tabbedData: TabData = {
	'Program Overview': {
		title: 'Program Overview',
		description:
			'The hospitality major prepares students for leadership in the fast-paced and dynamic hospitality industry. Students will gain a deep understanding of hospitality management, customer experience, event planning, and sustainable practices. This major is tailored for those passionate about creating exceptional guest experiences and managing hospitality operations.',
		sections: [
			{
				title: 'Why Choose This Program?',
				items: [
					'Gain essential business knowledge and skills in hospitality.',
					'Build essential management and customer service skills.',
					'Learn to navigate the global hospitality industry.',
					'Gain expertise in event planning, food and beverage management, and sustainability.',
					'Learn from industry-relevant curriculum aligned with workforce needs.',
				],
			},
			{
				title: 'Graduate Attributes',
				items: [
					'Apply disciplinary knowledge and critical thinking to problem-solve and adapt to contemporary and changing business environments in creating and sustaining stakeholder value.',
					'Work collaboratively and autonomously to create and lead a productive, inclusive and equitable workplace and community.',
					'Be digitally literate through a commitment to lifelong learning to enhance business practices through analytical and technical skills.',
					'Communicate complex information with insight and clarity to diverse audiences.',
					'Contribute to sustainable communities through ethical professional practice and integrity with compassion in decision making.',
					'Respect and champion culturally diverse perspectives and rights in a global context.',
				],
			},
		],
	},
	'Why Choose This Program?': {
		title: 'Why Choose This Program?',
		description:
			'Our hospitality program stands out for its comprehensive approach to industry education and practical experience.',
		sections: [
			{
				title: 'Industry Connections',
				items: [
					'Partnership with leading hospitality brands and hotels.',
					'Access to exclusive internship opportunities.',
					'Guest lectures from industry professionals.',
					'Networking events with hospitality leaders.',
				],
			},
			{
				title: 'Practical Learning',
				items: [
					'State-of-the-art training facilities.',
					'Real-world case studies and simulations.',
					'Hands-on experience in our training restaurant.',
					'Industry placement programs.',
				],
			},
		],
	},
	'Career Outcomes': {
		title: 'Career Outcomes',
		description:
			'Graduates from our hospitality program are well-prepared for diverse career opportunities in the global hospitality industry.',
		sections: [
			{
				title: 'Career Opportunities',
				items: [
					'Hotel and Resort Management',
					'Event Planning and Management',
					'Restaurant and Food Service Management',
					'Tourism and Travel Operations',
					'Corporate Hospitality and Catering',
					'Hospitality Consulting',
				],
			},
			{
				title: 'Graduate Success',
				items: [
					'95% employment rate within 6 months of graduation.',
					'Average starting salary of $55,000+',
					'Strong alumni network in major hospitality markets.',
					'Ongoing career support and professional development.',
				],
			},
		],
	},
	'Admission Requirements': {
		title: 'Admission Requirements',
		description:
			'We welcome applications from students who demonstrate academic excellence and a passion for the hospitality industry.',
		sections: [
			{
				title: 'Academic Requirements',
				items: [
					'Completion of high school diploma or equivalent.',
					'Minimum GPA of 3.0 on a 4.0 scale.',
					'English proficiency (TOEFL/IELTS for international students).',
					'Mathematics and English prerequisite courses.',
				],
			},
			{
				title: 'Application Materials',
				items: [
					'Completed online application form.',
					'Official high school transcripts.',
					'Personal statement or essay.',
					'Two letters of recommendation.',
					'Resume highlighting relevant experience.',
					'Portfolio of work (if applicable).',
				],
			},
			{
				title: 'Important Dates',
				items: [
					'Early admission deadline: December 1st.',
					'Regular admission deadline: March 1st.',
					'Final admission deadline: June 1st.',
					'International student deadline: April 1st.',
				],
			},
		],
	},
};

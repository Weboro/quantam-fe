import { slugs } from '@/extra/slugs';

interface Ipage {
	name: string;
	slug: string;
	title: string;
	description?: string;
	seo?: ISeo;
	subPages?: ISubpage[];
}

interface ISubpage {
	icon?: string;
	name: string;
	slug: string;
}

interface ISeo {
	title: string;
	description: string;
}

const pages: Ipage[] = [
	{
		name: 'Programs',
		slug: slugs.programs,
		title: 'Our Programs',
		description:
			'Browse through the range of Programs we offer for different skill levels.',
		seo: {
			title: 'Programs — QIHE',
			description: 'Check out our full catalog of Programs and learning paths.',
		},
		subPages: [
			{
				slug: slugs.bachelorBusinessAccounting,
				name: 'Bachelors of Business - Accounting',
			},
			{
				slug: slugs.bachelorBusinessInformationSystems,
				name: 'Bachelors of Business - Information Systems',
			},
			{
				slug: slugs.bachelorBusinessHospitality,
				name: 'Bachelors of Business - Hospitality',
			},
			{
				slug: slugs.bachelorInformationTechnology,
				name: 'Bachelors of Information Technology',
			},
		],
	},
	{
		name: 'Future Students',
		slug: slugs.futureStudents,
		title: 'Future Students',
		description:
			'Essential resources and information for prospective students planning to study with us.',
		seo: {
			title: 'Future Students — QIHE',
			description:
				'Learn about application processes, scholarships, and life at QIHE as a future student.',
		},
		subPages: [
			{
				name: 'Why Choose Us',
				slug: slugs.whyChooseUs,
				icon: 'fi fi-rr-choose',
			},
			{
				name: 'Admissions',
				slug: slugs.admissions,
				icon: 'fi fi-rr-id-card-clip-alt',
			},
			{
				name: 'Admission Requirements',
				slug: slugs.admissionRequirements,
				icon: 'fi fi-rr-document-signed',
			},
			{
				name: 'Find Agent',
				slug: slugs.findAgent,
				icon: 'fi fi-rr-member-search',
			},

			{
				name: 'Orientation and Pre-Arrival Guide',
				slug: slugs.orientationAndPreArrivalGuide,
				icon: 'fi fi-rr-info-guide',
			},
			{
				name: 'Policies and Procedures',
				slug: slugs.policiesAndProcedures,
				icon: 'fi fi-rr-workflow-alt',
			},
		],
	},
	{
		name: 'QIHE Students',
		slug: slugs.qiheStudents,
		title: 'QIHE Students',
		description:
			'Access services, support, and campus resources for current QIHE students.',
		seo: {
			title: 'QIHE Students — QIHE',
			description:
				'All the tools and support you need to thrive as a QIHE student.',
		},
		subPages: [
			{
				slug: slugs.studentPlatform,
				name: 'Student Platform',
				icon: 'fi fi-rr-student-alt',
			},
			{
				slug: slugs.library,
				name: 'Library',
				icon: 'fi fi-rr-diary-bookmark-down',
			},
			{
				slug: slugs.keyDates,
				name: 'Key Dates',
				icon: 'fi fi-rr-calendar-star',
			},

			{
				slug: slugs.forms,
				name: 'Forms',
				icon: 'fi fi-rr-form',
			},

			{
				slug: slugs.feesandPayments,
				name: 'Fees and Payment',
				icon: 'fi fi-rr-fee',
			},
		],
	},
	{
		name: 'Discover QIHE',
		slug: slugs.discoverQihe,
		title: 'Discover QIHE',
		description:
			'Explore our story, mission, campus life, and why QIHE is the right choice for you.',
		seo: {
			title: 'Discover QIHE — QIHE',
			description:
				'Get to know QIHE, our values, campus, and what makes us unique.',
		},
		subPages: [
			{
				slug: slugs.aboutQihe,
				name: 'About QIHE',
				icon: 'fi fi-rr-school',
			},
			{
				slug: slugs.missionAndVision,
				name: 'Mission and Vision',
				icon: 'fi fi-rr-flag',
			},
			{
				slug: slugs.ourCoreValues,
				name: 'Our Core Values',
				icon: 'fi fi-rr-gem',
			},
			{
				slug: slugs.ourCoreTeam,
				name: 'Our Core Team',
				icon: 'fi fi-rr-lead-management',
			},
			{
				slug: slugs.academicTeam,
				name: 'Academic Team',
				icon: 'fi fi-rr-hr-person',
			},
			{
				slug: slugs.supportTeam,
				name: 'Support Team',
				icon: 'fi fi-rr-heart-partner-handshake',
			},
			{
				slug: slugs.faqs,
				name: 'Frequently Asked Questions',
				icon: 'fi fi-rr-seal-question',
			},
			{
				slug: slugs.studentAssociation,
				name: 'Student Association',
				icon: 'fi fi-rr-employees-woman-man',
			},
		],
	},
];

export default pages;

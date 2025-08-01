
export interface ICourse {
	id: string;
	name: string;
	slug: string;
	description: string;
	richText: string;
	heroImage: string;
	images: string[];
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	duration: string;
	tags: string[];
	publishedDate: string;
	syllabus?: string[];
	price?: number;
	url: string;
	location?: string;
	studyLevel?: 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Certificate';
	intakes?: string[];
	deliveryMode?: ('Face-to-face' | 'Online' | 'Blended')[];
	CRICOSCourseCode?: string;
	tabbedPaneData?: {
		title: string;
		richText: string;
	}[];
}

const courses: ICourse[] = [
	{
		id: 'bachelor-business-accounting',
		name: 'Bachelor of Business – Accounting',
		slug: 'bachelor-business-accounting',
		description:
			'The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.',
		richText:
			'<ul><li>Gain expertise to analyse financial data and create value for stakeholders</li><li>Prepare for CPA Australia and CAANZ eligibility</li><li>Explore sustainability and forensic accounting</li></ul>',
		heroImage: '/courses/accounting/hero.jpg',
		images: ['/courses/accounting/1.jpg'],
		level: 'Beginner',
		duration: '3 years, Full-Time',
		tags: ['Accounting', 'Business'],
		publishedDate: '2025-08-01',
		url: '/courses/bachelor-business-accounting',
		location: 'Parramatta',
		studyLevel: 'Undergraduate',
		intakes: ['March', 'July', 'November'],
		deliveryMode: ['Face-to-face'],
		CRICOSCourseCode: '_TBA_',
		tabbedPaneData: [
			{
				title: 'Program Overview',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Core Learning Outcomes</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Master financial reporting standards and principles</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Develop advanced analytical and problem-solving skills</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Understand taxation and regulatory compliance</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Professional Recognition</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Pathway to CPA Australia membership</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">CAANZ accreditation eligibility</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Industry-recognized qualifications</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Why Choose This Program?',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Our accounting program provides a comprehensive foundation in financial analysis, reporting, and strategic decision-making.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry-Relevant Curriculum</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Modern accounting software and technology integration</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Real-world case studies and practical applications</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Sustainability and forensic accounting specializations</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Expert Faculty & Support</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Learn from industry-experienced accounting professionals</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Small class sizes for personalized attention</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Comprehensive career guidance and mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Career Outcomes',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Graduates are prepared for diverse accounting and finance roles across various industries.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Career Opportunities</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Public Practice Accountant</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Management Accountant</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Financial Analyst</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Taxation Specialist</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Graduate Success</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">92% employment rate within 6 months of graduation</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Average starting salary of $65,000+</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Strong alumni network in Big 4 and mid-tier firms</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Admission Requirements',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">We welcome applications from students who demonstrate academic excellence and a passion for accounting and finance.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Academic Requirements</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Completion of Year 12 or equivalent</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Minimum ATAR score of 65 (or equivalent)</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Mathematics (preferably Methods or Specialist) recommended</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Application Process</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Complete online application form</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Submit official academic transcripts</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">English language proficiency (IELTS 6.0 or equivalent for international students)</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
		],
	},
	{
		id: 'bachelor-business-information-systems',
		name: 'Bachelor of Business – Information Systems',
		slug: 'bachelor-business-information-systems',
		description:
			'Bridges the gap between technology and business, enabling students to harness technology for strategic decision-making.',
		richText:
			'<ul><li>Gain skills in software development, cybersecurity, and data management</li><li>Address real-world challenges with innovative solutions</li></ul>',
		heroImage: '/courses/information-systems/hero.jpg',
		images: ['/courses/information-systems/1.jpg'],
		level: 'Beginner',
		duration: '3 years, Full-Time',
		tags: ['Information Systems', 'Business'],
		publishedDate: '2025-08-01',
		url: '/courses/bachelor-business-information-systems',
		location: 'Parramatta',
		studyLevel: 'Undergraduate',
		intakes: ['March', 'July', 'November'],
		deliveryMode: ['Face-to-face'],
		CRICOSCourseCode: '_TBA_',
		tabbedPaneData: [
			{
				title: 'Program Overview',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">The Information Systems major bridges the gap between technology and business, enabling students to harness technology for strategic decision-making.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Technical Expertise</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Software development and programming fundamentals</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cybersecurity principles and threat management</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Database design and data management systems</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Business Integration</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Business process analysis and optimization</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Strategic technology implementation</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Digital transformation leadership</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Why Choose This Program?',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Our Information Systems program combines technical expertise with business acumen to prepare versatile IT professionals.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Cutting-Edge Technology</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Latest programming languages and frameworks</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Advanced cybersecurity tools and methodologies</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cloud computing and enterprise solutions</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Practical Experience</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Industry partnerships and internship opportunities</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Real-world project-based learning</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Professional certification pathways</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Career Outcomes',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Graduates are equipped for diverse technology roles that bridge business and IT domains.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Career Opportunities</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">IT Consultant</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Systems Analyst</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cybersecurity Specialist</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Business Intelligence Analyst</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry Demand</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">95% employment rate within 4 months of graduation</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Average starting salary of $70,000+</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">High growth potential in emerging tech sectors</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Admission Requirements',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">We seek students with strong analytical skills and an interest in technology and business integration.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Academic Requirements</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Completion of Year 12 or equivalent</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Minimum ATAR score of 65 (or equivalent)</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Mathematics and IT subjects preferred</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Application Process</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Submit online application with portfolio (optional)</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Provide academic transcripts and references</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">English proficiency requirements for international students</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
		],
	},
	{
		id: 'bachelor-business-hospitality',
		name: 'Bachelor of Business – Hospitality',
		slug: 'bachelor-business-hospitality',
		description:
			'Prepares students for leadership in the dynamic hospitality industry through hospitality management, event planning, and sustainability.',
		richText:
			'<ul><li>Develop customer experience and hospitality operations management skills</li><li>Learn event planning, food and beverage management</li></ul>',
		heroImage: '/courses/hospitality/hero.jpg',
		images: ['/courses/hospitality/1.jpg'],
		level: 'Beginner',
		duration: '3 years, Full-Time',
		tags: ['Hospitality', 'Business'],
		publishedDate: '2025-08-01',
		url: '/courses/bachelor-business-hospitality',
		location: 'Parramatta',
		studyLevel: 'Undergraduate',
		intakes: ['March', 'July', 'November'],
		deliveryMode: ['Face-to-face'],
		CRICOSCourseCode: '_TBA_',
		tabbedPaneData: [
			{
				title: 'Program Overview',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">The Hospitality major prepares students for leadership in the dynamic hospitality industry through comprehensive management training and practical experience.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Core Competencies</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Hospitality operations and service excellence</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Event planning and venue management</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Food and beverage operations</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry Focus</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Sustainable tourism and hospitality practices</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Digital hospitality technologies</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cross-cultural hospitality management</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Why Choose This Program?',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Our hospitality program offers hands-on experience and industry connections to launch your career in this exciting field.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Hands-On Learning</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">On-campus training restaurant and hotel facilities</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Industry placements with leading hospitality brands</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Real event planning and execution projects</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry Connections</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Guest lectures from industry executives</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Networking events and career fairs</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Mentorship programs with hospitality leaders</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Career Outcomes',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Graduates pursue diverse leadership roles across the global hospitality and tourism industry.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Career Opportunities</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Hotel Manager</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Event Coordinator</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Restaurant Manager</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Tourism Development Manager</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry Prospects</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">89% employment rate within 6 months</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Average starting salary of $55,000+</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Rapid career progression opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Admission Requirements',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">We welcome passionate individuals who are committed to delivering exceptional customer experiences.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Academic Requirements</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Completion of Year 12 or equivalent</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Minimum ATAR score of 65 (or equivalent)</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">English and business studies recommended</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Personal Attributes</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Strong communication and interpersonal skills</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Customer service orientation and cultural awareness</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Leadership potential and team collaboration skills</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
		],
	},
	{
		id: 'bachelor-information-technology',
		name: 'Bachelor of Information Technology',
		slug: 'bachelor-information-technology',
		description:
			'Equips students to thrive in the digital world with expertise in emerging tech, ethical IT practices, and business-focused problem-solving.',
		richText:
			'<ul><li>Learn AI, cloud computing, cybersecurity, and IoT</li><li>Prepare for diverse IT careers</li><li>Curriculum meets industry demands</li></ul>',
		heroImage: '/courses/information-technology/hero.jpg',
		images: ['/courses/information-technology/1.jpg'],
		level: 'Beginner',
		duration: '3 years, Full-Time',
		tags: ['IT', 'Technology'],
		publishedDate: '2025-08-01',
		url: '/courses/bachelor-information-technology',
		location: 'Parramatta',
		studyLevel: 'Undergraduate',
		intakes: ['March', 'July', 'November'],
		deliveryMode: ['Face-to-face'],
		CRICOSCourseCode: '_TBA_',
		tabbedPaneData: [
			{
				title: 'Program Overview',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">The Information Technology major equips students to thrive in the digital world with expertise in emerging technologies, ethical IT practices, and business-focused problem-solving.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Emerging Technologies</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Artificial Intelligence and Machine Learning</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cloud Computing and Infrastructure</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Internet of Things (IoT) and Edge Computing</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Professional Skills</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cybersecurity and risk management</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Project management and agile methodologies</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Ethical technology practices and governance</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Why Choose This Program?',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Our IT program combines technical excellence with business understanding to prepare future technology leaders.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Industry-Leading Curriculum</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Curriculum aligned with industry 4.0 requirements</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">State-of-the-art labs and development environments</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Regular curriculum updates reflecting tech trends</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Career Preparation</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Industry certifications and professional development</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Capstone projects with industry partners</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Career services and job placement support</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Career Outcomes',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">Graduates are prepared for high-demand technology roles across diverse industries and sectors.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Career Opportunities</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Software Developer</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Systems Analyst</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">IT Project Manager</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Cloud Solutions Architect</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Market Outlook</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">97% employment rate within 3 months of graduation</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Average starting salary of $75,000+</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Excellent advancement opportunities in tech sector</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
			{
				title: 'Admission Requirements',
				richText: `
          <div class="space-y-6">
            <p class="text-muted leading-relaxed">We seek innovative thinkers with strong problem-solving abilities and a passion for technology.</p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Academic Requirements</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Completion of Year 12 or equivalent</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Minimum ATAR score of 65 (or equivalent)</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Mathematics and computing subjects highly recommended</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Selection Criteria</h3>
              <ul class="space-y-2">
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Problem-solving aptitude and logical thinking</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">Interest in technology innovation and development</span>
                </li>
                <li class="flex items-start text-muted">
                  <span class="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="leading-relaxed">English proficiency for effective communication</span>
                </li>
              </ul>
            </div>
          </div>
        `,
			},
		],
	},
];

export default courses;

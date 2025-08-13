// Admin data management utilities
export interface HeroData {
	greeting: string;
	name: string;
	title: string;
	description: string;
	projectsCount: number;
	customersCount: number;
	experienceYears: number;
}

export interface ProjectData {
	id: string;
	title: string;
	thumbs: any[];
}

export interface SkillData {
	title: string;
	description: string;
	icon: string;
}

export interface BenefitData {
	title: string;
	description: string;
}

export interface TestimonialData {
	id: number;
	name: string;
	company: string;
	rating: number;
	testimonial: string;
	socialLinks: {
		linkedin: string;
		facebook: string;
		twitter: string;
	};
}

export interface FAQData {
	id: number;
	question: string;
	answer: string;
}

export interface SiteSettingsData {
	name: string;
	title: string;
	description: string;
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
}

// Default data fallbacks
export const DEFAULT_HERO_DATA: HeroData = {
	greeting: 'Hello There 👋',
	name: 'Lim Chhorng Welcome\'s You!',
	title: 'Web Designer',
	description: 'I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action',
	projectsCount: 55,
	customersCount: 20,
	experienceYears: 8
};

// Utility functions for data management
export const getHeroData = (): HeroData => {
	try {
		const savedData = localStorage.getItem('heroSectionData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading hero data:', error);
	}
	return DEFAULT_HERO_DATA;
};

export const getProjectsData = (): ProjectData[] => {
	try {
		const savedData = localStorage.getItem('projectsData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading projects data:', error);
	}
	return [];
};

export const getSkillsData = (): SkillData[] => {
	try {
		const savedData = localStorage.getItem('skillsData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading skills data:', error);
	}
	return [];
};

export const getBenefitsData = (): BenefitData[] => {
	try {
		const savedData = localStorage.getItem('benefitsData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading benefits data:', error);
	}
	return [];
};

export const getTestimonialsData = (): TestimonialData[] => {
	try {
		const savedData = localStorage.getItem('testimonialsData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading testimonials data:', error);
	}
	return [];
};

// Default FAQ data fallback
export const DEFAULT_FAQ_DATA: FAQData[] = [
	{
		id: 1,
		question: "Can you work with clients remotely?",
		answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location."
	},
	{
		id: 2,
		question: "How long does it typically take to complete a web design project?",
		answer: "The timeline varies depending on the project's complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects can take 6-8 weeks. I'll provide a detailed timeline during our initial consultation."
	},
	{
		id: 3,
		question: "Do you offer website maintenance services?",
		answer: "Yes, I offer comprehensive website maintenance services including regular updates, security monitoring, performance optimization, and content updates to keep your website running smoothly and securely."
	},
	{
		id: 4,
		question: "Can you optimize my website for search engines?",
		answer: "Absolutely! I implement SEO best practices including proper meta tags, structured data, mobile optimization, fast loading times, and clean code structure to help improve your website's search engine rankings."
	},
	{
		id: 5,
		question: "Can you integrate third-party tools or platforms into my website?",
		answer: "Yes, I can integrate various third-party tools and platforms such as payment gateways, CRM systems, email marketing tools, analytics platforms, and social media integrations to enhance your website's functionality."
	}
];

export const getFAQData = (): FAQData[] => {
	try {
		const savedData = localStorage.getItem('faqData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading FAQ data:', error);
	}
	return DEFAULT_FAQ_DATA;
};

export const getSiteSettingsData = (): SiteSettingsData => {
	try {
		const savedData = localStorage.getItem('siteSettingsData');
		if (savedData) {
			return JSON.parse(savedData);
		}
	} catch (error) {
		console.error('Error loading site settings data:', error);
	}
	return {
		name: 'John Doe',
		title: 'Portfolio',
		description: 'Full-stack developer portfolio',
		email: 'john.doe@example.com',
		github: 'https://github.com/john-doe',
		linkedin: 'https://linkedin.com/in/john-doe',
		twitter: 'https://twitter.com/john-doe',
	};
};

// Event listener for data changes
export const subscribeToDataChanges = (callback: () => void) => {
	const handleStorageChange = (e: StorageEvent) => {
		if (e.key && e.key.includes('Data')) {
			callback();
		}
	};

	window.addEventListener('storage', handleStorageChange);
	
	// Return cleanup function
	return () => {
		window.removeEventListener('storage', handleStorageChange);
	};
};

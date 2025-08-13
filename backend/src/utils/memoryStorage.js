// In-memory storage for development (when MongoDB is not available)
class MemoryStorage {
	constructor() {
		this.data = {
			admins: [
				{
					_id: 'admin1',
					username: 'admin',
					password: '$2a$10$rQZ8K9mX2nL1pO3qR5sT7uV8wX9yZ0aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV',
					email: 'admin@portfolio.com',
					role: 'super_admin'
				}
			],
			herosections: [
				{
					_id: 'hero1',
					greeting: 'Hello There 👋',
					name: 'Lim Chhorng Welcome\'s You!',
					title: 'Web Designer',
					description: 'I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action',
					projectsCount: 55,
					customersCount: 20,
					experienceYears: 8
				}
			],
			faqs: [
				{
					_id: 'faq1',
					question: 'Can you work with clients remotely?',
					answer: 'Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.',
					order: 1
				},
				{
					_id: 'faq2',
					question: 'How long does it typically take to complete a web design project?',
					answer: 'The timeline varies depending on the project\'s complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects can take 6-8 weeks. I\'ll provide a detailed timeline during our initial consultation.',
					order: 2
				},
				{
					_id: 'faq3',
					question: 'Do you offer website maintenance services?',
					answer: 'Yes, I offer comprehensive website maintenance services including regular updates, security monitoring, performance optimization, and content updates to keep your website running smoothly and securely.',
					order: 3
				},
				{
					_id: 'faq4',
					question: 'Can you optimize my website for search engines?',
					answer: 'Absolutely! I implement SEO best practices including proper meta tags, structured data, mobile optimization, fast loading times, and clean code structure to help improve your website\'s search engine rankings.',
					order: 4
				},
				{
					_id: 'faq5',
					question: 'Can you integrate third-party tools or platforms into my website?',
					answer: 'Yes, I can integrate various third-party tools and platforms such as payment gateways, CRM systems, email marketing tools, analytics platforms, and social media integrations to enhance your website\'s functionality.',
					order: 5
				}
			]
		};
	}

	// Helper to generate unique IDs
	generateId() {
		return Date.now().toString() + Math.random().toString(36).substr(2, 9);
	}

	// Admin methods
	getAdminByUsername(username) {
		return this.data.admins.find(admin => admin.username === username);
	}

	// Hero section methods
	getHeroSection() {
		return this.data.herosections[0] || null;
	}

	updateHeroSection(heroData) {
		if (this.data.herosections.length === 0) {
			this.data.herosections.push({ _id: this.generateId(), ...heroData });
		} else {
			Object.assign(this.data.herosections[0], heroData);
		}
		return this.data.herosections[0];
	}

	// FAQ methods
	getFAQs() {
		return this.data.faqs.sort((a, b) => a.order - b.order);
	}

	createFAQ(faqData) {
		const newFAQ = {
			_id: this.generateId(),
			...faqData,
			order: this.data.faqs.length + 1
		};
		this.data.faqs.push(newFAQ);
		return newFAQ;
	}

	updateFAQ(id, faqData) {
		const faq = this.data.faqs.find(f => f._id === id);
		if (faq) {
			Object.assign(faq, faqData);
		}
		return faq;
	}

	deleteFAQ(id) {
		const index = this.data.faqs.findIndex(f => f._id === id);
		if (index !== -1) {
			this.data.faqs.splice(index, 1);
			// Reorder remaining FAQs
			this.data.faqs.forEach((faq, idx) => {
				faq.order = idx + 1;
			});
			return true;
		}
		return false;
	}

	reorderFAQs(faqIds) {
		const reorderedFAQs = [];
		faqIds.forEach((id, index) => {
			const faq = this.data.faqs.find(f => f._id === id);
			if (faq) {
				faq.order = index + 1;
				reorderedFAQs.push(faq);
			}
		});
		this.data.faqs = reorderedFAQs;
		return this.getFAQs();
	}
}

module.exports = new MemoryStorage();

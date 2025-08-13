import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, FAQData } from '../utils/api';

const FAQ = () => {
	const navigate = useNavigate();
	const [openItem, setOpenItem] = useState<string>('');
	const [faqData, setFaqData] = useState<FAQData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadFAQData();
	}, []);

	const loadFAQData = async () => {
		try {
			const data = await apiService.getFAQs();
			setFaqData(data);
			if (data.length > 0) {
				setOpenItem(data[0]._id || '');
			}
		} catch (error) {
			console.error('Error loading FAQ data:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleItemClick = (id: string) => {
		setOpenItem(openItem === id ? '' : id);
	};

	const handleContactClick = () => {
		navigate('/contact');
	};

	if (loading) {
		return (
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-5">
					<div className="text-center">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
						<p className="mt-4 text-gray-600">Loading FAQs...</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<>
			{/* FAQ Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-5">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
						<p className="text-gray-600 text-lg">
							Here are answers to some common questions
						</p>
					</div>

					<div className="flex flex-col lg:flex-row lg:items-start gap-12">
						{/* Left Column - FAQ Accordion */}
						<div className="flex-1 bg-[#F7F6F3] px-6 py-2 pb-6 rounded-xl">
							{faqData.map((item) => (
								<div key={item._id} className="bg-[#EEEBE5] mt-4 rounded-lg ">
									<button
										className="w-full px-6 py-4 text-left flex justify-between items-center  transition-colors"
										onClick={() => handleItemClick(item._id || '')}
									>
										<span className="font-medium text-gray-800">{item.question}</span>
										<span className="text-gray-500 border border-gray-300 rounded-md p-1">
											{openItem === item._id ? (
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
												</svg>
											) : (
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
												</svg>
											)}
										</span>
									</button>
									{openItem === item._id && (
										<div className="px-6 pb-4">
											<p className="text-gray-600 leading-relaxed">{item.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Right Column - Contact CTA */}
						<div className="flex-1 bg-[#F7F6F3] rounded-xl p-8 text-left">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">Still have any Questions?</h3>
							<p className="text-md text-gray-600 mb-8 leading-relaxed ">
								Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!
							</p>
							<button
								onClick={handleContactClick}
								className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
							>
								Contact Me
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQ;
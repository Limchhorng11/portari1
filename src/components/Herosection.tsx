import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, HeroData } from '../utils/api';

import topSectionImage from '../assets/images/im_top_sect.png';

const Herosection: React.FC = () => {
	const navigate = useNavigate();
	const [heroData, setHeroData] = useState<HeroData>({
		greeting: 'Hello There 👋',
		name: 'Lim Chhorng Welcome\'s You!',
		title: 'Web Designer',
		description: 'I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action',
		projectsCount: 55,
		customersCount: 20,
		experienceYears: 8
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadHeroData();
	}, []);

	const loadHeroData = async () => {
		try {
			const data = await apiService.getHeroSection();
			setHeroData(data);
		} catch (error) {
			console.error('Error loading hero data:', error);
		} finally {
			setLoading(false);
		}
	};
	
	const handleViewProjects = () => {
		navigate('/projects');
	};

	const handleContactMe = () => {
		navigate('/contact');
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<>
			{/* Hero Section */}
			<div className="min-h-screen flex items-center relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-5 w-full relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
						<div className="order-2 lg:order-1 pr-0 lg:pr-10">
							<div className="inline-block bg-white rounded-2xl px-4 py-2 mb-5 text-sm text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<span>{heroData.greeting}</span>
							</div>
							<h1 className="text-4xl lg:text-5xl font-bold text-black mb-5 leading-tight bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
								{heroData.name}
							</h1>
							<p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
								{heroData.description}
							</p>
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10">
								<button
									type="button"
									className="bg-blue-600 text-white px-6 py-3 rounded-lg border-none cursor-pointer font-medium transition-all duration-300 relative overflow-hidden hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
									onClick={handleContactMe}
								>
									<span>Book a Call</span>
								</button>
								<button
									type="button"
									className="text-blue-600 border-none bg-transparent cursor-pointer font-medium transition-all duration-300 relative hover:text-purple-700 hover:translate-x-1 w-full sm:w-auto text-center"
									onClick={handleViewProjects}
								>
									<span>View Portfolio →</span>
								</button>
							</div>
							<div className="flex justify-between gap-4 sm:gap-8 bg-white rounded-xl p-4 shadow-lg">
								<div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
									<div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
										{heroData.projectsCount}<span className="text-blue-600 text-xl lg:text-2xl">+</span>
									</div>
									<div className="text-xs lg:text-sm text-gray-600">
										Completed Projects
									</div>
								</div>
								<div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
									<div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
										{heroData.customersCount}<span className="text-blue-600 text-xl lg:text-2xl">+</span>
									</div>
									<div className="text-xs lg:text-sm text-gray-600">
										Happy Customers
									</div>
								</div>
								<div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
									<div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
										{heroData.experienceYears.toString().padStart(2, '0')}<span className="text-blue-600 text-xl lg:text-2xl">+</span>
									</div>
									<div className="text-xs lg:text-sm text-gray-600">
										Years of Experience
									</div>
								</div>
							</div>
						</div>
						<div className="order-1 lg:order-2 relative bg-gray-900 rounded-xl overflow-hidden h-80 lg:h-screen">
							<div className="absolute top-0 right-0 w-full h-full bg-gray-900 overflow-hidden">
								<img 
									src={topSectionImage} 
									alt="Jeffery Cannon" 
									className="w-full h-full object-cover relative z-10 transition-transform duration-500 hover:scale-105"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Herosection;
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiService, HeroData } from '../../utils/api';

const AdminHeroSection: React.FC = () => {
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
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		loadHeroData();
	}, [navigate]);

	const loadHeroData = async () => {
		try {
			const data = await apiService.getHeroSection();
			setHeroData(data);
		} catch (error) {
			console.error('Error loading hero data:', error);
		}
	};

	const handleSave = async () => {
		setLoading(true);
		setMessage('');

		try {
			await apiService.updateHeroSection(heroData);
			setMessage('Hero section data saved successfully!');
			setTimeout(() => setMessage(''), 3000);
		} catch (error: any) {
			setMessage(`Error: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (field: keyof HeroData, value: string | number) => {
		setHeroData(prev => ({
			...prev,
			[field]: value
		}));
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">Hero Section Editor</h1>
							<p className="text-gray-600">Edit your main hero content and statistics</p>
						</div>
						<div className="flex items-center space-x-4">
							<Link
								to="/admin"
								className="text-blue-600 hover:text-blue-800 text-sm font-medium"
							>
								← Back to Dashboard
							</Link>
							<Link
								to="/"
								target="_blank"
								className="text-green-600 hover:text-green-800 text-sm font-medium"
							>
								View Site
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-6">Hero Content</h2>
					
					<div className="space-y-6">
						{/* Greeting */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Greeting Text
							</label>
							<input
								type="text"
								value={heroData.greeting}
								onChange={(e) => handleInputChange('greeting', e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Hello There 👋"
							/>
						</div>

						{/* Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Name & Title
							</label>
							<input
								type="text"
								value={heroData.name}
								onChange={(e) => handleInputChange('name', e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Lim Chhorng Welcome's You!"
							/>
						</div>

						{/* Description */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Description
							</label>
							<textarea
								value={heroData.description}
								onChange={(e) => handleInputChange('description', e.target.value)}
								rows={4}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter your description..."
							/>
						</div>

						{/* Statistics */}
						<div>
							<h3 className="text-lg font-medium text-gray-900 mb-4">Statistics</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Completed Projects
									</label>
									<input
										type="number"
										value={heroData.projectsCount}
										onChange={(e) => handleInputChange('projectsCount', parseInt(e.target.value) || 0)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Happy Customers
									</label>
									<input
										type="number"
										value={heroData.customersCount}
										onChange={(e) => handleInputChange('customersCount', parseInt(e.target.value) || 0)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Years of Experience
									</label>
									<input
										type="number"
										value={heroData.experienceYears}
										onChange={(e) => handleInputChange('experienceYears', parseInt(e.target.value) || 0)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Preview */}
					<div className="mt-8 p-6 bg-gray-50 rounded-lg">
						<h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
						<div className="space-y-4">
							<div className="inline-block bg-white rounded-2xl px-4 py-2 text-sm text-gray-800 shadow-lg">
								<span>{heroData.greeting}</span>
							</div>
							<h1 className="text-3xl font-bold text-black leading-tight">
								{heroData.name}
							</h1>
							<p className="text-gray-600 leading-relaxed">
								{heroData.description}
							</p>
							<div className="flex justify-between gap-4 bg-white rounded-xl p-4 shadow-lg">
								<div className="text-center flex-1">
									<div className="text-2xl font-bold text-black mb-1">
										{heroData.projectsCount}<span className="text-blue-600 text-xl">+</span>
									</div>
									<div className="text-xs text-gray-600">Completed Projects</div>
								</div>
								<div className="text-center flex-1">
									<div className="text-2xl font-bold text-black mb-1">
										{heroData.customersCount}<span className="text-blue-600 text-xl">+</span>
									</div>
									<div className="text-xs text-gray-600">Happy Customers</div>
								</div>
								<div className="text-center flex-1">
									<div className="text-2xl font-bold text-black mb-1">
										{heroData.experienceYears.toString().padStart(2, '0')}<span className="text-blue-600 text-xl">+</span>
									</div>
									<div className="text-xs text-gray-600">Years of Experience</div>
								</div>
							</div>
						</div>
					</div>

					{/* Message */}
					{message && (
						<div className={`mt-4 p-3 rounded-md text-sm ${
							message.includes('Error') 
								? 'bg-red-100 text-red-700' 
								: 'bg-green-100 text-green-700'
						}`}>
							{message}
						</div>
					)}

					{/* Save Button */}
					<div className="mt-8 flex justify-end">
						<button
							onClick={handleSave}
							disabled={loading}
							className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? 'Saving...' : 'Save Changes'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHeroSection;

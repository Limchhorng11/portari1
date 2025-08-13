import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../utils/constants';

interface SiteSettings {
	name: string;
	title: string;
	description: string;
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
}

const AdminSiteSettings: React.FC = () => {
	const navigate = useNavigate();
	const [settings, setSettings] = useState<SiteSettings>({
		name: 'John Doe',
		title: 'Portfolio',
		description: 'Full-stack developer portfolio',
		email: 'john.doe@example.com',
		github: 'https://github.com/john-doe',
		linkedin: 'https://linkedin.com/in/john-doe',
		twitter: 'https://twitter.com/john-doe'
	});

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		// Load saved data from localStorage
		const savedData = localStorage.getItem('siteSettingsData');
		if (savedData) {
			setSettings(JSON.parse(savedData));
		} else {
			setSettings(SITE_CONFIG);
		}
	}, [navigate]);

	const handleSave = () => {
		localStorage.setItem('siteSettingsData', JSON.stringify(settings));
		alert('Site settings saved successfully!');
	};

	const handleInputChange = (field: keyof SiteSettings, value: string) => {
		setSettings(prev => ({
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
							<h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
							<p className="text-gray-600">Configure site name, contact info, and social links</p>
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
					<h2 className="text-xl font-semibold text-gray-900 mb-6">Site Configuration</h2>
					
					<div className="space-y-6">
						{/* Basic Information */}
						<div>
							<h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Site Name
									</label>
									<input
										type="text"
										value={settings.name}
										onChange={(e) => handleInputChange('name', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Your Name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Site Title
									</label>
									<input
										type="text"
										value={settings.title}
										onChange={(e) => handleInputChange('title', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Portfolio"
									/>
								</div>
							</div>
							<div className="mt-4">
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Site Description
								</label>
								<textarea
									value={settings.description}
									onChange={(e) => handleInputChange('description', e.target.value)}
									rows={3}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Brief description of your portfolio"
								/>
							</div>
						</div>

						{/* Contact Information */}
						<div>
							<h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									value={settings.email}
									onChange={(e) => handleInputChange('email', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="your.email@example.com"
								/>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Links</h3>
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										GitHub Profile
									</label>
									<input
										type="url"
										value={settings.github}
										onChange={(e) => handleInputChange('github', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="https://github.com/yourusername"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										LinkedIn Profile
									</label>
									<input
										type="url"
										value={settings.linkedin}
										onChange={(e) => handleInputChange('linkedin', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="https://linkedin.com/in/yourusername"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Twitter Profile
									</label>
									<input
										type="url"
										value={settings.twitter}
										onChange={(e) => handleInputChange('twitter', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="https://twitter.com/yourusername"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Preview */}
					<div className="mt-8 p-6 bg-gray-50 rounded-lg">
						<h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
						<div className="space-y-4">
							<div>
								<h4 className="text-lg font-semibold text-gray-900">{settings.name}</h4>
								<p className="text-gray-600">{settings.title}</p>
								<p className="text-gray-500 text-sm mt-1">{settings.description}</p>
							</div>
							<div>
								<p className="text-gray-700">
									<strong>Email:</strong> {settings.email}
								</p>
							</div>
							<div className="flex space-x-4">
								<a href={settings.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
									GitHub
								</a>
								<a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
									LinkedIn
								</a>
								<a href={settings.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
									Twitter
								</a>
							</div>
						</div>
					</div>

					{/* Save Button */}
					<div className="mt-8 flex justify-end">
						<button
							onClick={handleSave}
							className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Save Settings
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminSiteSettings;

import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Check if user is authenticated
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
		}
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem('adminAuthenticated');
		navigate('/admin/login');
	};

	const adminSections = [
		{
			title: 'Hero Section',
			description: 'Edit main hero content, name, and statistics',
			path: '/admin/hero-section',
			icon: '🏠'
		},
		{
			title: 'Projects',
			description: 'Manage portfolio projects and thumbnails',
			path: '/admin/projects',
			icon: '💼'
		},
		{
			title: 'Skills & Benefits',
			description: 'Edit skills, benefits, and expertise sections',
			path: '/admin/skills',
			icon: '⚡'
		},
		{
			title: 'Testimonials',
			description: 'Manage customer testimonials and reviews',
			path: '/admin/testimonials',
			icon: '💬'
		},
		{
			title: 'FAQ',
			description: 'Edit frequently asked questions',
			path: '/admin/faq',
			icon: '❓'
		},
		{
			title: 'Site Settings',
			description: 'Configure site name, contact info, and social links',
			path: '/admin/site-settings',
			icon: '⚙️'
		}
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
							<p className="text-gray-600">Manage your portfolio content</p>
						</div>
						<div className="flex items-center space-x-4">
							<Link
								to="/"
								target="_blank"
								className="text-blue-600 hover:text-blue-800 text-sm font-medium"
							>
								View Site
							</Link>
							<button
								onClick={handleLogout}
								className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{adminSections.map((section) => (
						<Link
							key={section.path}
							to={section.path}
							className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
						>
							<div className="flex items-center space-x-4">
								<div className="text-3xl">{section.icon}</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">
										{section.title}
									</h3>
									<p className="text-gray-600 text-sm mt-1">
										{section.description}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Quick Stats */}
				<div className="mt-12 bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">3</div>
							<div className="text-gray-600 text-sm">Projects</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">4</div>
							<div className="text-gray-600 text-sm">Testimonials</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-purple-600">6</div>
							<div className="text-gray-600 text-sm">Skills</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-orange-600">5</div>
							<div className="text-gray-600 text-sm">FAQ Items</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;

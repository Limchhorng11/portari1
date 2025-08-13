import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TESTIMONIALS_DATA } from '../../utils/constants';

interface Testimonial {
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

const AdminTestimonials: React.FC = () => {
	const navigate = useNavigate();
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
	const [isAddingNew, setIsAddingNew] = useState(false);

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		// Load saved data from localStorage
		const savedData = localStorage.getItem('testimonialsData');
		if (savedData) {
			setTestimonials(JSON.parse(savedData));
		} else {
			setTestimonials(TESTIMONIALS_DATA);
		}
	}, [navigate]);

	const handleSave = () => {
		localStorage.setItem('testimonialsData', JSON.stringify(testimonials));
		alert('Testimonials data saved successfully!');
	};

	const handleAddNewTestimonial = () => {
		const newTestimonial: Testimonial = {
			id: Date.now(),
			name: 'New Customer',
			company: 'Company Name',
			rating: 5,
			testimonial: 'Great testimonial here...',
			socialLinks: {
				linkedin: '#none',
				facebook: '#none',
				twitter: '#none'
			}
		};
		setEditingTestimonial(newTestimonial);
		setIsAddingNew(true);
	};

	const handleEditTestimonial = (testimonial: Testimonial) => {
		setEditingTestimonial({ ...testimonial });
		setIsAddingNew(false);
	};

	const handleSaveTestimonial = () => {
		if (!editingTestimonial) return;

		if (isAddingNew) {
			setTestimonials(prev => [...prev, editingTestimonial]);
		} else {
			setTestimonials(prev => prev.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
		}
		setEditingTestimonial(null);
		setIsAddingNew(false);
	};

	const handleDeleteTestimonial = (id: number) => {
		if (window.confirm('Are you sure you want to delete this testimonial?')) {
			setTestimonials(prev => prev.filter(t => t.id !== id));
		}
	};

	const handleCancelEdit = () => {
		setEditingTestimonial(null);
		setIsAddingNew(false);
	};

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, i) => (
			<span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
				★
			</span>
		));
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
							<p className="text-gray-600">Manage customer testimonials and reviews</p>
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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Testimonials List */}
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-xl font-semibold text-gray-900">Testimonials</h2>
						<button
							onClick={handleAddNewTestimonial}
							className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
						>
							Add New Testimonial
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div key={testimonial.id} className="border border-gray-200 rounded-lg p-4">
								<div className="flex justify-between items-start mb-3">
									<div>
										<h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
										<p className="text-gray-600 text-sm">{testimonial.company}</p>
									</div>
									<div className="flex space-x-2">
										<button
											onClick={() => handleEditTestimonial(testimonial)}
											className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
										>
											Edit
										</button>
										<button
											onClick={() => handleDeleteTestimonial(testimonial.id)}
											className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
										>
											Delete
										</button>
									</div>
								</div>
								<div className="mb-3">
									<div className="flex text-lg">
										{renderStars(testimonial.rating)}
									</div>
								</div>
								<p className="text-gray-700 text-sm line-clamp-3">
									{testimonial.testimonial}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Edit Testimonial Form */}
				{editingTestimonial && (
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">
							{isAddingNew ? 'Add New Testimonial' : 'Edit Testimonial'}
						</h2>
						
						<div className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Name
									</label>
									<input
										type="text"
										value={editingTestimonial.name}
										onChange={(e) => setEditingTestimonial(prev => prev ? { ...prev, name: e.target.value } : null)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Company
									</label>
									<input
										type="text"
										value={editingTestimonial.company}
										onChange={(e) => setEditingTestimonial(prev => prev ? { ...prev, company: e.target.value } : null)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Rating
								</label>
								<select
									value={editingTestimonial.rating}
									onChange={(e) => setEditingTestimonial(prev => prev ? { ...prev, rating: parseInt(e.target.value) } : null)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value={1}>1 Star</option>
									<option value={2}>2 Stars</option>
									<option value={3}>3 Stars</option>
									<option value={4}>4 Stars</option>
									<option value={5}>5 Stars</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Testimonial
								</label>
								<textarea
									value={editingTestimonial.testimonial}
									onChange={(e) => setEditingTestimonial(prev => prev ? { ...prev, testimonial: e.target.value } : null)}
									rows={4}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											LinkedIn
										</label>
										<input
											type="text"
											value={editingTestimonial.socialLinks.linkedin}
											onChange={(e) => setEditingTestimonial(prev => prev ? { 
												...prev, 
												socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
											} : null)}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Facebook
										</label>
										<input
											type="text"
											value={editingTestimonial.socialLinks.facebook}
											onChange={(e) => setEditingTestimonial(prev => prev ? { 
												...prev, 
												socialLinks: { ...prev.socialLinks, facebook: e.target.value }
											} : null)}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Twitter
										</label>
										<input
											type="text"
											value={editingTestimonial.socialLinks.twitter}
											onChange={(e) => setEditingTestimonial(prev => prev ? { 
												...prev, 
												socialLinks: { ...prev.socialLinks, twitter: e.target.value }
											} : null)}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 flex justify-end space-x-4">
							<button
								onClick={handleCancelEdit}
								className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
							>
								Cancel
							</button>
							<button
								onClick={handleSaveTestimonial}
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
							>
								Save Testimonial
							</button>
						</div>
					</div>
				)}

				{/* Save All Changes */}
				{!editingTestimonial && (
					<div className="mt-8 flex justify-end">
						<button
							onClick={handleSave}
							className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Save All Changes
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminTestimonials;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiService, FAQData } from '../../utils/api';

const AdminFAQ: React.FC = () => {
	const navigate = useNavigate();
	const [faqs, setFaqs] = useState<FAQData[]>([]);
	const [editingFaq, setEditingFaq] = useState<FAQData | null>(null);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		loadFAQs();
	}, [navigate]);

	const loadFAQs = async () => {
		try {
			const data = await apiService.getFAQs();
			setFaqs(data);
		} catch (error) {
			console.error('Error loading FAQs:', error);
		}
	};

	const handleSave = async () => {
		setLoading(true);
		setMessage('');

		try {
			// Save all FAQs
			for (const faq of faqs) {
				if (faq._id) {
					await apiService.updateFAQ(faq._id, {
						question: faq.question,
						answer: faq.answer
					});
				}
			}
			setMessage('FAQ data saved successfully!');
			setTimeout(() => setMessage(''), 3000);
		} catch (error: any) {
			setMessage(`Error: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	const handleAddNewFAQ = () => {
		const newFAQ: FAQData = {
			_id: undefined,
			question: 'New Question',
			answer: 'New Answer',
			order: faqs.length + 1
		};
		setEditingFaq(newFAQ);
		setIsAddingNew(true);
	};

	const handleEditFAQ = (faq: FAQData) => {
		setEditingFaq({ ...faq });
		setIsAddingNew(false);
	};

	const handleSaveFAQ = async () => {
		if (!editingFaq) return;

		try {
			if (isAddingNew) {
				const newFAQ = await apiService.createFAQ({
					question: editingFaq.question,
					answer: editingFaq.answer
				});
				setFaqs(prev => [...prev, newFAQ]);
			} else {
				if (editingFaq._id) {
					const updatedFAQ = await apiService.updateFAQ(editingFaq._id, {
						question: editingFaq.question,
						answer: editingFaq.answer
					});
					setFaqs(prev => prev.map(f => f._id === editingFaq._id ? updatedFAQ : f));
				}
			}
			setEditingFaq(null);
			setIsAddingNew(false);
		} catch (error: any) {
			alert(`Error saving FAQ: ${error.message}`);
		}
	};

	const handleDeleteFAQ = async (id: string) => {
		if (window.confirm('Are you sure you want to delete this FAQ?')) {
			try {
				await apiService.deleteFAQ(id);
				setFaqs(prev => prev.filter(f => f._id !== id));
			} catch (error: any) {
				alert(`Error deleting FAQ: ${error.message}`);
			}
		}
	};

	const handleCancelEdit = () => {
		setEditingFaq(null);
		setIsAddingNew(false);
	};

	const handleMoveUp = (index: number) => {
		if (index > 0) {
			const newFaqs = [...faqs];
			[newFaqs[index], newFaqs[index - 1]] = [newFaqs[index - 1], newFaqs[index]];
			setFaqs(newFaqs);
		}
	};

	const handleMoveDown = (index: number) => {
		if (index < faqs.length - 1) {
			const newFaqs = [...faqs];
			[newFaqs[index], newFaqs[index + 1]] = [newFaqs[index + 1], newFaqs[index]];
			setFaqs(newFaqs);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
							<p className="text-gray-600">Edit frequently asked questions</p>
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
				{/* FAQ List */}
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
						<button
							onClick={handleAddNewFAQ}
							className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
						>
							Add New FAQ
						</button>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div key={faq._id} className="border border-gray-200 rounded-lg p-4">
								<div className="flex justify-between items-start">
									<div className="flex-1">
										<div className="flex items-center space-x-2 mb-2">
											<span className="text-sm text-gray-500 font-medium">#{index + 1}</span>
											<h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
										</div>
										<p className="text-gray-700 text-sm line-clamp-2">{faq.answer}</p>
									</div>
									<div className="flex space-x-2 ml-4">
										<button
											onClick={() => handleMoveUp(index)}
											disabled={index === 0}
											className="bg-gray-600 text-white px-2 py-1 rounded text-sm hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
											title="Move Up"
										>
											↑
										</button>
										<button
											onClick={() => handleMoveDown(index)}
											disabled={index === faqs.length - 1}
											className="bg-gray-600 text-white px-2 py-1 rounded text-sm hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
											title="Move Down"
										>
											↓
										</button>
										<button
											onClick={() => handleEditFAQ(faq)}
											className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
										>
											Edit
										</button>
										<button
											onClick={() => faq._id && handleDeleteFAQ(faq._id)}
											className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
										>
											Delete
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Edit FAQ Form */}
				{editingFaq && (
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">
							{isAddingNew ? 'Add New FAQ' : 'Edit FAQ'}
						</h2>
						
						<div className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Question
								</label>
								<input
									type="text"
									value={editingFaq.question}
									onChange={(e) => setEditingFaq(prev => prev ? { ...prev, question: e.target.value } : null)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Enter your question..."
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Answer
								</label>
								<textarea
									value={editingFaq.answer}
									onChange={(e) => setEditingFaq(prev => prev ? { ...prev, answer: e.target.value } : null)}
									rows={6}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Enter your answer..."
								/>
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
								onClick={handleSaveFAQ}
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
							>
								Save FAQ
							</button>
						</div>
					</div>
				)}

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

				{/* Save All Changes */}
				{!editingFaq && (
					<div className="mt-8 flex justify-end">
						<button
							onClick={handleSave}
							disabled={loading}
							className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? 'Saving...' : 'Save All Changes'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminFAQ;

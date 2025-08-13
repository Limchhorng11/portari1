import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SkillbySect, benefits } from '../../utils/constants';

interface SkillItem {
	title: string;
	description: string;
	icon: string;
}

interface BenefitItem {
	title: string;
	description: string;
}

const AdminSkills: React.FC = () => {
	const navigate = useNavigate();
	const [skills, setSkills] = useState<SkillItem[]>([]);
	const [benefitsList, setBenefitsList] = useState<BenefitItem[]>([]);
	const [activeTab, setActiveTab] = useState<'skills' | 'benefits'>('skills');

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		// Load saved data from localStorage
		const savedSkills = localStorage.getItem('skillsData');
		const savedBenefits = localStorage.getItem('benefitsData');

		if (savedSkills) {
			setSkills(JSON.parse(savedSkills));
		} else {
			setSkills(SkillbySect);
		}

		if (savedBenefits) {
			setBenefitsList(JSON.parse(savedBenefits));
		} else {
			setBenefitsList(benefits);
		}
	}, [navigate]);

	const handleSave = () => {
		localStorage.setItem('skillsData', JSON.stringify(skills));
		localStorage.setItem('benefitsData', JSON.stringify(benefitsList));
		alert('Skills and benefits data saved successfully!');
	};

	const handleAddSkill = () => {
		const newSkill: SkillItem = {
			title: 'New Skill',
			description: 'Skill description',
			icon: 'ic_cs01'
		};
		setSkills(prev => [...prev, newSkill]);
	};

	const handleAddBenefit = () => {
		const newBenefit: BenefitItem = {
			title: 'New Benefit',
			description: 'Benefit description'
		};
		setBenefitsList(prev => [...prev, newBenefit]);
	};

	const handleDeleteSkill = (index: number) => {
		if (window.confirm('Are you sure you want to delete this skill?')) {
			setSkills(prev => prev.filter((_, i) => i !== index));
		}
	};

	const handleDeleteBenefit = (index: number) => {
		if (window.confirm('Are you sure you want to delete this benefit?')) {
			setBenefitsList(prev => prev.filter((_, i) => i !== index));
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">Skills & Benefits Management</h1>
							<p className="text-gray-600">Edit your skills, benefits, and expertise sections</p>
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
				{/* Tabs */}
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<div className="border-b border-gray-200">
						<nav className="-mb-px flex space-x-8">
							<button
								onClick={() => setActiveTab('skills')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'skills'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Skills
							</button>
							<button
								onClick={() => setActiveTab('benefits')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'benefits'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Benefits
							</button>
						</nav>
					</div>

					{/* Skills Tab */}
					{activeTab === 'skills' && (
						<div className="mt-6">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-xl font-semibold text-gray-900">Skills</h2>
								<button
									onClick={handleAddSkill}
									className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
								>
									Add New Skill
								</button>
							</div>

							<div className="space-y-4">
								{skills.map((skill, index) => (
									<div key={index} className="border border-gray-200 rounded-lg p-4">
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Title
												</label>
												<input
													type="text"
													value={skill.title}
													onChange={(e) => {
														const newSkills = [...skills];
														newSkills[index].title = e.target.value;
														setSkills(newSkills);
													}}
													className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Icon
												</label>
												<input
													type="text"
													value={skill.icon}
													onChange={(e) => {
														const newSkills = [...skills];
														newSkills[index].icon = e.target.value;
														setSkills(newSkills);
													}}
													className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
												/>
											</div>
											<div className="flex items-end space-x-2">
												<button
													onClick={() => handleDeleteSkill(index)}
													className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
												>
													Delete
												</button>
											</div>
										</div>
										<div className="mt-4">
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Description
											</label>
											<textarea
												value={skill.description}
												onChange={(e) => {
													const newSkills = [...skills];
													newSkills[index].description = e.target.value;
													setSkills(newSkills);
												}}
												rows={3}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Benefits Tab */}
					{activeTab === 'benefits' && (
						<div className="mt-6">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
								<button
									onClick={handleAddBenefit}
									className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
								>
									Add New Benefit
								</button>
							</div>

							<div className="space-y-4">
								{benefitsList.map((benefit, index) => (
									<div key={index} className="border border-gray-200 rounded-lg p-4">
										<div className="flex justify-between items-start mb-4">
											<div className="flex-1">
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Title
												</label>
												<input
													type="text"
													value={benefit.title}
													onChange={(e) => {
														const newBenefits = [...benefitsList];
														newBenefits[index].title = e.target.value;
														setBenefitsList(newBenefits);
													}}
													className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
												/>
											</div>
											<button
												onClick={() => handleDeleteBenefit(index)}
												className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 ml-4"
											>
												Delete
											</button>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Description
											</label>
											<textarea
												value={benefit.description}
												onChange={(e) => {
													const newBenefits = [...benefitsList];
													newBenefits[index].description = e.target.value;
													setBenefitsList(newBenefits);
												}}
												rows={4}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Save Button */}
				<div className="flex justify-end">
					<button
						onClick={handleSave}
						className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminSkills;

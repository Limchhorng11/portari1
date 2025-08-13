import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PROJECTS_DATA, ProjectData } from '../../utils/constants';

const AdminProjects: React.FC = () => {
	const navigate = useNavigate();
	const [projects, setProjects] = useState<ProjectData[]>([]);
	const [editingProject, setEditingProject] = useState<ProjectData | null>(null);
	const [isAddingNew, setIsAddingNew] = useState(false);

	useEffect(() => {
		// Check authentication
		const isAuthenticated = localStorage.getItem('adminAuthenticated');
		if (!isAuthenticated) {
			navigate('/admin/login');
			return;
		}

		// Load saved data from localStorage
		const savedData = localStorage.getItem('projectsData');
		if (savedData) {
			setProjects(JSON.parse(savedData));
		} else {
			setProjects(PROJECTS_DATA);
		}
	}, [navigate]);

	const handleSave = () => {
		localStorage.setItem('projectsData', JSON.stringify(projects));
		alert('Projects data saved successfully!');
	};

	const handleEditProject = (project: ProjectData) => {
		setEditingProject({ ...project });
		setIsAddingNew(false);
	};

	const handleAddNewProject = () => {
		const newProject: ProjectData = {
			id: `project-${Date.now()}`,
			title: 'New Project',
			thumbs: [
				{
					id: 1,
					color: 'from-purple-200 to-pink-200',
					textColor: 'text-purple-600',
					image: '/img/placeholder.jpg',
					label: 'Page 1'
				}
			]
		};
		setEditingProject(newProject);
		setIsAddingNew(true);
	};

	const handleSaveProject = () => {
		if (!editingProject) return;

		if (isAddingNew) {
			setProjects(prev => [...prev, editingProject]);
		} else {
			setProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
		}
		setEditingProject(null);
		setIsAddingNew(false);
	};

	const handleDeleteProject = (projectId: string) => {
		if (window.confirm('Are you sure you want to delete this project?')) {
			setProjects(prev => prev.filter(p => p.id !== projectId));
		}
	};

	const handleCancelEdit = () => {
		setEditingProject(null);
		setIsAddingNew(false);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
							<p className="text-gray-600">Manage your portfolio projects and thumbnails</p>
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
				{/* Projects List */}
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-xl font-semibold text-gray-900">Projects</h2>
						<button
							onClick={handleAddNewProject}
							className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
						>
							Add New Project
						</button>
					</div>

					<div className="space-y-4">
						{projects.map((project) => (
							<div key={project.id} className="border border-gray-200 rounded-lg p-4">
								<div className="flex justify-between items-center">
									<div>
										<h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
										<p className="text-gray-600 text-sm">ID: {project.id}</p>
										<p className="text-gray-600 text-sm">{project.thumbs.length} thumbnails</p>
									</div>
									<div className="flex space-x-2">
										<button
											onClick={() => handleEditProject(project)}
											className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
										>
											Edit
										</button>
										<button
											onClick={() => handleDeleteProject(project.id)}
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

				{/* Edit Project Form */}
				{editingProject && (
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">
							{isAddingNew ? 'Add New Project' : 'Edit Project'}
						</h2>
						
						<div className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Project Title
								</label>
								<input
									type="text"
									value={editingProject.title}
									onChange={(e) => setEditingProject(prev => prev ? { ...prev, title: e.target.value } : null)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Project ID
								</label>
								<input
									type="text"
									value={editingProject.id}
									onChange={(e) => setEditingProject(prev => prev ? { ...prev, id: e.target.value } : null)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-4">Thumbnails</h3>
								<div className="space-y-4">
									{editingProject.thumbs.map((thumb, index) => (
										<div key={thumb.id} className="border border-gray-200 rounded-lg p-4">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Image URL
													</label>
													<input
														type="text"
														value={thumb.image}
														onChange={(e) => {
															const newThumbs = [...editingProject.thumbs];
															newThumbs[index].image = e.target.value;
															setEditingProject(prev => prev ? { ...prev, thumbs: newThumbs } : null);
														}}
														className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Label
													</label>
													<input
														type="text"
														value={thumb.label}
														onChange={(e) => {
															const newThumbs = [...editingProject.thumbs];
															newThumbs[index].label = e.target.value;
															setEditingProject(prev => prev ? { ...prev, thumbs: newThumbs } : null);
														}}
														className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
													/>
												</div>
											</div>
										</div>
									))}
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
								onClick={handleSaveProject}
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
							>
								Save Project
							</button>
						</div>
					</div>
				)}

				{/* Save All Changes */}
				{!editingProject && (
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

export default AdminProjects;

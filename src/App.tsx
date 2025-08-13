import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import CSS
import './style/content.css';

// Import Components
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHeroSection from './pages/admin/AdminHeroSection';
import AdminProjects from './pages/admin/AdminProjects';
import AdminSkills from './pages/admin/AdminSkills';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminFAQ from './pages/admin/AdminFAQ';
import AdminSiteSettings from './pages/admin/AdminSiteSettings';

function App() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				{/* Admin Routes */}
				<Route path="/admin/login" element={<AdminLogin />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/admin/hero-section" element={<AdminHeroSection />} />
				<Route path="/admin/projects" element={<AdminProjects />} />
				<Route path="/admin/skills" element={<AdminSkills />} />
				<Route path="/admin/testimonials" element={<AdminTestimonials />} />
				<Route path="/admin/faq" element={<AdminFAQ />} />
				<Route path="/admin/site-settings" element={<AdminSiteSettings />} />
				
				{/* Public Routes */}
				<Route path="/*" element={
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

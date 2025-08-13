import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../../utils/constants'

const Footer = () => {
	const location = useLocation()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className="border-t border-[#E1DBD1] mt-12">
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Mobile Layout */}
				<div className="md:hidden text-center">
					{/* Name */}
					<div 
						className="text-purple-600 text-2xl font-semibold mb-6 cursor-pointer"
						onClick={scrollToTop}
					>
						Lim Chhorng.
					</div>
					
					{/* Social Icons */}
					<div className="flex justify-center gap-4 mb-6">
						<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
							<img src="../img/icons/linkedinWhite.svg" alt="LinkedIn" className="w-5 h-5" />
						</a>
						<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
							<img src="../img/icons/twitterWhite.svg" alt="Twitter" className="w-5 h-5" />
						</a>
						<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
							<img src="../img/icons/globeWhite.svg" alt="Website" className="w-5 h-5" />
						</a>
					</div>
					
					{/* Navigation Links - Vertical Stack */}
					<div className="flex flex-col gap-3 mb-8">
						{NAVIGATION.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`text-base font-medium no-underline ${
									location.pathname === item.path
										? 'text-purple-600'
										: 'text-gray-800 hover:text-purple-600'
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>
					
					{/* Contact Information - Vertical Stack */}
					<div className="border border-gray-200 rounded-lg px-6 py-4 mb-6">
						<div className="flex flex-col justify-start gap-4">
							<div className="flex item justify-center gap-3">
								<img src="../img/icons/email.svg" alt="Email" className="w-5 h-5"/>
								<span className="text-base font-medium text-gray-800">hello@jefferycannon.com</span>
							</div>
							<div className="flex items-center justify-center gap-3">
								<img src="../img/icons/phone.svg" alt="Phone" className="w-5 h-5" />
								<span className="text-base font-medium text-gray-800">+1 123 456 7890</span>
							</div>
							<div className="flex items-center justify-center gap-3">
								<img src="../img/icons/location.svg" alt="Location" className="w-5 h-5" />
								<span className="text-gray-800">123 Main St, Anytown, USA</span>
							</div>
						</div>
					</div>
					
					{/* Copyright */}
					<div className="text-center">
						<p className="text-gray-500 text-sm">Copyright © 2023 Jeffery Cannon. All rights reserved.</p>
					</div>
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:block">
					<div className="flex items-center justify-between mb-8">
						<div 
							className="text-purple-600 text-2xl font-semibold cursor-pointer"
							onClick={scrollToTop}
						>
							Lim Chhorng.
						</div>
						<div className="flex gap-8">
							{NAVIGATION.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`text-base font-medium no-underline ${
										location.pathname === item.path
											? 'hover:text-purple-600'
											: 'text-gray-800 hover:text-purple-600'
									}`}
								>
									{item.label}
								</Link>
							))}
						</div>
						<div className="flex gap-4">
							<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
								<img src="../img/icons/linkedinWhite.svg" alt="LinkedIn" className="w-5 h-5" />
							</a>
							<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
								<img src="../img/icons/twitterWhite.svg" alt="Twitter" className="w-5 h-5" />
							</a>
							<a href="#none" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center no-underline">
								<img src="../img/icons/globeWhite.svg" alt="Website" className="w-5 h-5" />
							</a>
						</div>
					</div>
					<div className="flex justify-center mb-8">
						<div className="border border-gray-200 rounded-lg px-8 py-6 flex gap-8">
							<div className="flex items-center gap-3">
								<img src="../img/icons/email.svg" alt="Email" className="w-6 h-6"/>
								<span className="text-base font-medium text-gray-500">jefferycannon@gmail.com</span>
							</div>
							<div className="flex items-center gap-3">
								<img src="../img/icons/phone.svg" alt="Phone" className="w-6 h-6" />
								<span className="text-base font-medium text-gray-500">+91 91813 23 2300</span>
							</div>
							<div className="flex items-center gap-3">
								<img src="../img/icons/location.svg" alt="Location" className="w-6 h-6" />
								<span className="text-base font-medium text-gray-500">Somewhere in the World</span>
							</div>
						</div>
					</div>
					<div className="text-center">
						<p className="text-gray-500 text-md">Copyright © 2025 Jeffery Cannon. All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
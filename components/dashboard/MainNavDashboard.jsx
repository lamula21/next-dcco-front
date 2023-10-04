'use client'

import Link from 'next/link'
import logo from '@/public/logo-white.jpg'
import Image from 'next/image'

import { useState } from 'react'
import { X } from 'lucide-react'

export function MainNavDashboard({ children }) {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="hidden items-center space-x-2 md:flex">
				<Image
					src={logo}
					alt="website logo"
					className="hidden sm:inline-block sm:w-10 sm:h-10 rounded-lg"
				/>

				<span className="hidden font-bold sm:inline-block">
					D.C Code Officials
				</span>
			</Link>

			<button
				className="flex items-center space-x-2 md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? <X /> : null}
				<span className="font-bold">Menu</span>
			</button>
		</div>
	)
}

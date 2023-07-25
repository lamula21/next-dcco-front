'use client'
import hero from '@/public/hero.jpg'
import hero2 from '@/public/hero2.jpg'
import logo from '@/public/logo-bg-removed.png'
import { useEffect, useRef, useState } from 'react'

import { MainNav } from '@/components/MainNav'
import Image from 'next/image'

export const Section1_2 = () => {
	const [isFixed, setIsFixed] = useState(false)
	const navbarRef = useRef(null)
	const section2Ref = useRef(null)

	const handleScroll = () => {
		// similar to query selector
		const navbar = navbarRef.current
		const section2 = section2Ref.current

		// if navbar exists on the screen
		if (navbar) {
			const navbarTop = navbar.getBoundingClientRect().top // calculate distance btw navbar and top screen
			const sectionTop = section2.getBoundingClientRect().top // calculate dst btw section2 and top screen

			let sticky = navbarTop <= 0 // true when navbar touches top screen

			// (set bg-transparent in MainNav.jsx to see distance difference)
			// if navbar is sticked at top && at original position
			if (sticky && sectionTop >= 80) {
				// Navbar no sticked
				sticky = false
			}

			setIsFixed(sticky) // Toggle the navbarFixed state
		}
	}

	// add event once then remove event after reload/re-renders page
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<div
				className="section-1 relative h-screen bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-[80px] before:left-0 before:right-0 before:z-10 before:h-[33%] before:bg-gradient-to-b before:from-transparent before:via-[#0000004d_75%] before:to-[#0000004d_100%]"
				style={{ backgroundImage: `url(${hero.src})` }}
			>
				<div className="hidden lg:block absolute bottom-[20%] left-[5%]">
					<Image priority src={logo} width={130} alt="DCCO Association Logo" />
				</div>

				<MainNav navbarRef={navbarRef} isFixed={isFixed} />
			</div>

			<div
				ref={section2Ref}
				className="section-2 relative h-screen bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:z-10 before:h-[85%] before:bg-gradient-to-b before:from-transparent before:to-[#0000004d_100%]"
				style={{ backgroundImage: `url(${hero2.src})` }}
			></div>
		</>
	)
}

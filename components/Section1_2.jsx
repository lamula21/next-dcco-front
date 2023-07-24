'use client'
import hero from '@/public/hero.jpg'
import hero2 from '@/public/hero2.jpg'
import { useEffect, useRef, useState } from 'react'

import { MainNav } from '@/components/MainNav'

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
			console.log('navbarTop', navbarTop)
			console.log('sectionTop', sectionTop)

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
				className="section-1 relative h-screen bg-fixed bg-cover bg-center"
				style={{ backgroundImage: `url(${hero.src})` }}
			>
				<MainNav navbarRef={navbarRef} isFixed={isFixed} />
			</div>

			<div
				ref={section2Ref}
				className="section-2 h-screen bg-fixed bg-cover bg-center"
				style={{ backgroundImage: `url(${hero2.src})` }}
			></div>
		</>
	)
}

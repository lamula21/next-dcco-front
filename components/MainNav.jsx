'use client'
import { SiteConfig } from '@/app/config/SiteConfig'
import { Navbar } from '@/components/Navbar'
import { MobileNav } from '@/components/MobileNav'
import { cn } from '@/lib/utils'

export const MainNav = ({ navbarRef, isFixed }) => {
	return (
		<header
			ref={navbarRef}
			className={cn(
				'w-full bg-[#222] z-20',
				isFixed ? 'fixed top-0 left-0' : 'absolute bottom-0 left-0'
			)}
		>
			<div className='flex h-20 items-center w-full px-8'>
				<Navbar />
				<MobileNav mainNavItems={SiteConfig} />
			</div>
		</header>
	)
}

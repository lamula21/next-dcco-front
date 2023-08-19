import Image from 'next/image'
import hero from '@/public/hero.jpg'
import logo from '@/public/logo-bg-removed.png'

import { MobileNav } from '@/components/MobileNav'
import { Navbar } from '@/components/Navbar'
import { SiteConfig } from '@/app/config/SiteConfig'

export default function RoutesLayout({
	children, // will be a page or nested layout
}) {
	return (
		<>
			<header>
				<section
					className='relative h-40 bg-cover bg-center'
					style={{ backgroundImage: `url(${hero.src})` }}
				>
					<div className='hidden lg:block absolute bottom-[15%] left-[5%]'>
						<Image priority src={logo} width={80} alt='DCCO Association Logo' />
					</div>
				</section>
			</header>

			<aside className='sticky z-10 top-0 flex bg-[#222] h-20 items-center w-full px-8 border-y border-[#333]'>
				<Navbar />
				<MobileNav mainNavItems={SiteConfig} />
			</aside>

			{children}
		</>
	)
}

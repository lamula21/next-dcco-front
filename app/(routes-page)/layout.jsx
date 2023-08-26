import Image from 'next/image'
import hero from '@/public/hero.jpg'
import logo from '@/public/logo-bg-removed.png'

import { MobileNav } from '@/components/MobileNav'
import { Navbar } from '@/components/Navbar'
import { SiteConfig } from '@/app/config/SiteConfig'
import Link from 'next/link'

export default function RoutesLayout({ children }) {
	return (
		<>
			<header>
				<section
					className="relative h-40 bg-cover bg-center"
					style={{ backgroundImage: `url(${hero.src})` }}
				>
					<Link
						href={'/'}
						className="hidden lg:block absolute bottom-[15%] left-[5%]"
					>
						<Image priority src={logo} width={80} alt="DCCO Association Logo" />
					</Link>
				</section>
			</header>

			<aside className="sticky z-10 top-0 flex bg-[#222] h-20 items-center w-full px-8 border-y border-[#333]">
				<Navbar />
				<MobileNav mainNavItems={SiteConfig} />
			</aside>

			{children}
		</>
	)
}

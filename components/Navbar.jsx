'use client'

import navImage from '@/public/content-image-4.avif'
import navImage2 from '@/public/content-image-1.jpg'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { ListItem } from '@/components/ListItem'
import Image from 'next/image'

export function Navbar() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (mounted === false) {
		return null
	}

	return (
		<nav className="hidden mx-auto lg:flex">
			<NavigationMenu>
				{/* Navbar */}
				<NavigationMenuList>
					{/* Anchor Container */}
					<NavigationMenuItem>
						{/* Button - card triggerer */}
						<NavigationMenuTrigger className="text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase">
							About
						</NavigationMenuTrigger>

						{/* Popover Card Container */}
						<NavigationMenuContent className="bg-[#222]">
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
								<li className="relative row-span-5">
									{/* Card Items */}
									<NavigationMenuLink asChild>
										<a
											className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/"
										>
											<div className="z-10 group absolute left-0 top-0 h-full w-full rounded-md bg-super-gradient transition-colors hover:bg-gradient-to-b hover:from-muted/50 hover:to-muted"></div>
											<Image
												src={navImage}
												className="absolute top-0 left-0 h-full w-full object-cover object-center rounded-md"
												alt="some alt description"
											/>

											<div className="z-10 pointer-events-none transition-opacity duration-300 mb-2 mt-4 text-lg font-medium opacity-0 group-hover:opacity-100">
												Learn about us.
											</div>
											<p className="z-10 pointer-events-none transition-opacity duration-300 text-sm leading-tight text-muted-foreground opacity-0 group-hover:opacity-100">
												Stay tuned!
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="/about" title="About">
									Learn more about us.
								</ListItem>
								<ListItem href="/board-members" title="Board Members">
									Visit our board members.
								</ListItem>
								<ListItem href="/legends" title="Legends">
									Explore our legend members.
								</ListItem>
								<ListItem
									href="https://www.iccsafe.org/"
									target="_blank"
									title="ICC"
								>
									Visit the International Code Council.
								</ListItem>
								<ListItem href="/region-vii" title="Region VII">
									More About our Codes.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className="text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase">
							<Link href="/join-us">Join Us</Link>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="bg-[#222]">
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="relative row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/"
										>
											<div className="z-10 group absolute left-0 top-0 h-full w-full rounded-md bg-super-gradient transition-colors hover:bg-gradient-to-b hover:from-muted/50 hover:to-muted" />

											<Image
												src={navImage2}
												className="absolute top-0 left-0 h-full w-full object-cover object-center rounded-md"
												alt="some alt description"
											/>

											<div className="z-10 pointer-events-none transition-opacity duration-300 mb-2 mt-4 text-lg font-medium opacity-0 group-hover:opacity-100">
												Join Us.
											</div>
											<p className="z-10 pointer-events-none transition-opacity duration-300 text-sm leading-tight text-muted-foreground opacity-0 group-hover:opacity-100">
												Connect. Share. Grow. Get Involved Today!
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="/join-us/membership" title="Membership">
									Join our club.
								</ListItem>
								<ListItem href="/join-us/sponsorship" title="Sponsorship">
									Support our cause.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className="text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase">
							Events/Training
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								<li>
									<div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors">
										<h1 className="text-lg font-extrabold leading-snug text-muted-foreground tracking-wider">
											Events
										</h1>
										<Separator className="bg-zinc-700" />
									</div>
								</li>

								<li>
									<div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors">
										<h1 className="text-lg font-extrabold leading-snug text-muted-foreground tracking-wider">
											Training
										</h1>
										<Separator className="bg-zinc-700" />
									</div>
								</li>

								<ListItem href="/calendar" title="Calendar">
									See our calendar.
								</ListItem>

								<ListItem href="/live-training" title="Live Training Events">
									Check out our recent training events.
								</ListItem>

								<ListItem href="/dcco-events" title="DCCOA Events">
									Follow our next events.
								</ListItem>

								<ListItem
									href="/on-demand"
									title="On-demand/Self-Paced Courses"
								>
									Read more about our courses.
								</ListItem>

								<ListItem
									href="https://www.iccsafe.org/professional-development/development"
									title="ICC Events"
									target="_blank"
								>
									Follow the International Code Council events
								</ListItem>

								<ListItem href="/career-training" title="Career Training">
									Get ready for our career training.
								</ListItem>

								<ListItem
									href="https://learn.iccsafe.org/ihtml/application/student/interface.icc2021/index.html"
									title="ICC Code Training"
									className="col-start-2"
									target="_blank"
								>
									Visit the International Code Council training catalog.
								</ListItem>

								<ListItem
									href="https://www.iccsafe.org/professional-development/icc-learn-live-events/"
									title="ICC Learn Live"
									className="col-start-2"
									target="_blank"
								>
									Watch ICC recent live trainings.
								</ListItem>

								<ListItem
									href="https://www.iccsafe.org/about/who-we-are/"
									title="International"
									className="col-start-2"
									target="_blank"
								>
									Explore more about ICC.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Anchor Container */}
					<NavigationMenuItem>
						<Link href="/standards-resources" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Standards & Resources
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/contact" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Contact
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/shop" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								The Shop
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/login" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-[#CCCCCC] text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Log In
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	)
}

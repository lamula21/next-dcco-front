'use client'

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

export function Navbar() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (mounted === false) {
		return null
	}

	return (
		<nav className='hidden mx-auto lg:flex'>
			<NavigationMenu>
				{/* Navbar */}
				<NavigationMenuList>
					{/* Anchor Container */}
					<NavigationMenuItem>
						{/* Button - card triggerer */}
						<NavigationMenuTrigger className='text-sm font-semibold tracking-wide bg-transparent uppercase'>
							About
						</NavigationMenuTrigger>

						{/* Popover Card Container */}
						<NavigationMenuContent className='bg-[#222]'>
							<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]'>
								<li className='row-span-5'>
									{/* Card Items */}
									<NavigationMenuLink asChild>
										<a
											className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
											href='/'
										>
											<div className='mb-2 mt-4 text-lg font-medium'>Image</div>
											<p className='text-sm leading-tight text-muted-foreground'>
												Some text about image
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href='/about' title='About'>
									Learn more about us.
								</ListItem>
								<ListItem href='/' title='Board Members'>
									Visit our board members.
								</ListItem>
								<ListItem href='/' title='Comittees'>
									Explore our comittees.
								</ListItem>
								<ListItem href='/' title='ICC'>
									Visit the International Code Council.
								</ListItem>
								<ListItem href='/' title='Region VII'>
									More About our Codes.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className='text-sm font-semibold tracking-wide bg-transparent uppercase'>
							Join Us
						</NavigationMenuTrigger>
						<NavigationMenuContent className='bg-[#222]'>
							<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
								<li className='row-span-3'>
									<NavigationMenuLink asChild>
										<a
											className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
											href='/'
										>
											<div className='mb-2 mt-4 text-lg font-medium'>Image</div>
											<p className='text-sm leading-tight text-muted-foreground'>
												Some text about image
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href='/docs' title='Membership'>
									Join our club.
								</ListItem>
								<ListItem href='/docs/installation' title='Sponsorship'>
									Support our cause.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className='text-sm font-semibold tracking-wide bg-transparent uppercase'>
							Events/Training
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								<li>
									<div className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'>
										<h1 className='text-lg font-extrabold leading-snug text-muted-foreground tracking-wider'>
											Events
										</h1>
										<Separator className='bg-zinc-700' />
									</div>
								</li>

								<li>
									<div className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'>
										<h1 className='text-lg font-extrabold leading-snug text-muted-foreground tracking-wider'>
											Training
										</h1>
										<Separator className='bg-zinc-700' />
									</div>
								</li>

								<ListItem href='/' title='Calendar'>
									See our calendar.
								</ListItem>

								<ListItem href='/' title='Live Training Events'>
									Check out our recent training events.
								</ListItem>

								<ListItem href='/' title='DCCOA Events'>
									Follow our next events.
								</ListItem>

								<ListItem href='/' title='On-demand/Self-Paced Courses'>
									Read more about our courses.
								</ListItem>

								<ListItem href='/' title='ICC Events'>
									Follow the International Code Council events
								</ListItem>

								<ListItem
									href='/'
									title='ICC Code Training'
									className='col-start-2'
								>
									Visit the International Code Council training.
								</ListItem>

								<ListItem
									href='/'
									title='International'
									className='col-start-2'
								>
									Explore more about ICC.
								</ListItem>

								<ListItem
									href='/'
									title='Career Training'
									className='col-start-2'
								>
									Get ready for our career training.
								</ListItem>

								<ListItem
									href='/'
									title='ICC Learn Live'
									className='col-start-2'
								>
									Watch our recent live trainings.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Anchor Container */}
					<NavigationMenuItem>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Standards
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Resources
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								Contact
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-sm font-semibold tracking-wide bg-transparent uppercase'
								)}
							>
								The Shop
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									'text-sm font-semibold tracking-wide bg-transparent uppercase'
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

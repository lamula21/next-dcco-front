'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export function MobileNav({ mainNavItems }) {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (mounted === false) return null

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
				>
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pl-1 pr-0">
				<div className="px-7">
					<Link
						aria-label="Home"
						href="/"
						className="flex items-center"
						onClick={() => setIsOpen(false)}
					>
						<span className="font-bold">Menu</span>
					</Link>
				</div>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					<div className="pl-1 pr-7">
						<Accordion type="single" collapsible className="w-full">
							{mainNavItems?.map((item, index) =>
								item.href ? (
									<AccordionItem
										value={item.title}
										key={index}
										className="py-4"
									>
										<Link href={item.href} className=" text-sm capitalize">
											{item.title}
										</Link>
									</AccordionItem>
								) : (
									<AccordionItem value={item.title} key={index}>
										<AccordionTrigger className="text-sm capitalize">
											{item.title}
										</AccordionTrigger>
										<AccordionContent>
											<div className="flex flex-col space-y-2">
												{item.items?.map((subItem, index) =>
													subItem.href ? (
														<MobileLink
															key={index}
															href={String(subItem.href)}
															pathname={pathname}
															setIsOpen={setIsOpen}
															disabled={subItem.disabled}
														>
															{subItem.title}
														</MobileLink>
													) : (
														<div
															key={index}
															className="text-foreground/70 transition-colors"
														>
															{item.title}
														</div>
													)
												)}
											</div>
										</AccordionContent>
									</AccordionItem>
								)
							)}
						</Accordion>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
}

function MobileLink({ children, href, disabled, pathname, setIsOpen }) {
	return (
		<Link
			href={href}
			className={cn(
				'text-foreground/70 transition-colors hover:text-foreground',
				pathname === href && 'text-foreground',
				disabled && 'pointer-events-none opacity-60'
			)}
			onClick={() => setIsOpen(false)}
		>
			{children}
		</Link>
	)
}

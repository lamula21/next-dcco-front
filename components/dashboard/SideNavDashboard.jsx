'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { CreditCard, LayoutPanelLeft, Settings } from 'lucide-react'

const sideConfig = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: LayoutPanelLeft,
	},
	{
		title: 'Billing',
		href: '/dashboard/billing',
		icon: CreditCard,
	},
	{
		title: 'Settings',
		href: '/dashboard/settings',
		icon: Settings,
	},
]

export function SideNavDashboard() {
	const path = usePathname()

	return (
		<nav className="grid items-start gap-2">
			{sideConfig.map((item, index) => {
				const Icon = item.icon

				return (
					item.href && (
						<Link key={index} href={item.href}>
							<span
								className={cn(
									'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
									path === item.href ? 'bg-accent' : 'transparent',
									item.disabled && 'cursor-not-allowed opacity-80'
								)}
							>
								<Icon className="mr-2 h-4 w-4" />
								<span>{item.title}</span>
							</span>
						</Link>
					)
				)
			})}
		</nav>
	)
}

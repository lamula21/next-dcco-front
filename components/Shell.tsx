import * as React from 'react'

import { cn } from '@/lib/utils'

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
	children: React.ReactNode
	layout?: 'default' | 'dashboard' | 'auth' | 'centered'
}

export function Shell({
	as: Comp = 'section', // use a custome tag, default <section>
	children,
	layout = 'default',
	className,
	...props
}: ShellProps) {
	return (
		<Comp
			className={cn(
				'grid items-center gap-8 pb-8 pt-6 md:py-8',
				layout === 'default' && 'container',
				layout === 'auth' && 'container max-w-lg',
				layout === 'centered' && 'mt-20 max-w-md justify-center',
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	)
}
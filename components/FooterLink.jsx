import { cn } from '@/lib/utils'
import React from 'react'

export const FooterLink = ({ className, href, title }) => {
	return (
		<li className="list-none">
			<a
				href={href}
				className={cn(
					'py-2 text-[#d6d6d6] block text-base font-normal hover:translate-y-[-3px] hover:translate-x-[-5px] hover:text-[#fff]',
					className
				)}
			>
				{title}
			</a>
		</li>
	)
}

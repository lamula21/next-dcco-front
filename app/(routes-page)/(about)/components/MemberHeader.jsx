import { cn } from '@/lib/utils'
import React from 'react'

export function MemberHeader({ title, description, className, textStyle }) {
	return (
		<div className={cn('mx-auto max-w-2xl sm:text-center', className)}>
			<h2
				className={cn(
					'text-[#D6D3CD] text-3xl font-extrabold tracking-tight md:text-6xl',
					textStyle
				)}
			>
				{title}
			</h2>
			{description && (
				<p className="text-[#B1AAA0] md:text-xl leading-8 mt-6">
					{description}
				</p>
			)}
		</div>
	)
}

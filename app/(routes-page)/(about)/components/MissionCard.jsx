import { cn } from '@/lib/utils'
import React from 'react'

export default function MissionCard({ iconStyle, title, description, href }) {
	return (
		<div className="p-4 md:w-1/2 lg:w-1/3 text-center">
			<div className="p-6 h-full border-2 border-[#D6D3CD]/20 border-opacity-60 rounded-lg overflow-hidden ">
				<div className="flex flex-col gap-3 justify-center items-center lg:h-44 md:h-36 w-full">
					<i className={cn('text-8xl ml-2', iconStyle)} />
					<h1 className="title-font text-lg font-medium text-[#D6D3CD] mb-3">
						{title}
					</h1>
				</div>

				<div>
					<p className="leading-relaxed mb-3 text-center text-[#B1AAA0]">
						{description}
					</p>
					<div className="flex items-center justify-center flex-wrap ">
						<a
							className="text-[#C07331] inline-flex items-center md:mb-2 lg:mb-0"
							href={href}
						>
							<span className="hover:underline">Learn More</span>
							<i className="bx bx-right-arrow-alt w-4 h-4 pl-2" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

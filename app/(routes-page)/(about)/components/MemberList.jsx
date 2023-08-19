import Image from 'next/image'

import { cn } from '@/lib/utils'
import IconLink from '@/components/IconLink'

export function MemberList({
	src,
	alt,
	name,
	position,
	description,
	email,
	className,
	imageStyle,
	children,
}) {
	return (
		<li className={cn('flex pt-8 flex-col gap-6 xl:flex-row', className)}>
			{!src ? (
				<div
					className={cn(
						'flex w-52 aspect-[4/5] rounded-[1rem] bg-gradient-to-b from-muted/50 to-muted',
						imageStyle
					)}
				></div>
			) : (
				<Image
					src={src}
					alt={alt}
					className={cn(
						'object-cover rounded-[1rem] w-52 aspect-[4/5] flex-none',
						imageStyle
					)}
				/>
			)}
			<div className="flex-auto">
				<h2 className="text-[#D6D3CD] text-lg -tracking-wide leading-8 font-semibold">
					{name}
				</h2>
				<h3 className="text-[#CECAC3] text-base leading-7">{position}</h3>
				{description && (
					<p className="text-[#B1AAA0] text-base leading-7 mt-6">
						{description}
					</p>
				)}

				<div className="flex items-center">
					{email && (
						<>
							<IconLink
								className="flex items-center mt-4 mr-2"
								iconClass="bx bxs-envelope"
								href={`mailto:${email}`}
							/>
							<span className="text-base text-[#CECAC3] mt-4 break-all">
								{email}
							</span>
						</>
					)}
				</div>

				{children}
			</div>
		</li>
	)
}

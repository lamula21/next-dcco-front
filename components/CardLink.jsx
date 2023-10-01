import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function CardLink({ href, className, src, title }) {
	return (
		<Link
			href={href}
			className={cn(
				'flex flex-col items-center justify-between px-2 py-4 hover:bg-white/5 rounded-md',
				className
			)}
		>
			<Image src={src} className="w-[100px] h-[100px]" />
			<p>{title}</p>
		</Link>
	)
}

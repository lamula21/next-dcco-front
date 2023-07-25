import { cn } from '@/lib/utils'

export default function IconLink({ className, href, iconClass }) {
	return (
		<a
			href={href}
			className={cn(
				'inline-block text-xl text-[#d6d6d6] mr-[17px] hover:text-[#fff] hover:translate-y-[-5px]',
				className
			)}
			target="_blank"
		>
			<i className={iconClass}></i>
		</a>
	)
}

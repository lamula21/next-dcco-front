import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'

/* Container for A Card's Items */
export const ListItem = ({ className, href, title, children, target }) => {
	return (
		<li className={cn('text-[#CCCCCC] hover:text-white', className)}>
			<NavigationMenuLink asChild>
				<Link
					href={href}
					target={target}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
					)}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}

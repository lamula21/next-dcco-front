import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'

export function ProfileAvatar({ user, ...props }) {
	return (
		<Avatar {...props}>
			<Image
				alt={`Picture avata of ${user.name}`}
				src={user.image}
				width={40}
				height={40}
			/>

			<AvatarFallback>
				<span className="sr-only">{user.name}</span>
				<div className="h-4 w-4 rounded-full" />
			</AvatarFallback>
		</Avatar>
	)
}

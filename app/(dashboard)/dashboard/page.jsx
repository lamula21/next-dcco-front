import { signOut, useSession } from 'next-auth/react'
import { getServerCurrentUser } from '@/lib/session'
import TemporalLogoutButotn from '@/components/temporal-logout'
import { authOptions } from '@/lib/authOptions'

export default async function DashboardPage() {
	const user = await getServerCurrentUser()

	console.log(authOptions?.pages?.signIn)

	if (!user) {
		redirect(authOptions?.pages?.signIn || '/login')
	}

	return (
		<div>
			{user.name}
			<TemporalLogoutButotn />
		</div>
	)
}

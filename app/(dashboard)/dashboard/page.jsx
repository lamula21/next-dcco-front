import { signOut, useSession } from 'next-auth/react'
import { getServerCurrentUser } from '@/lib/session'
import { authOptions } from '@/lib/authOptions'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'

export default async function DashboardPage() {
	const user = await getServerCurrentUser()

	if (!user) {
		redirect(authOptions?.pages?.signIn || '/login')
	}

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Dashboard"
				text={`Welcome back! ${user.name}.`}
			/>

			<div></div>
		</DashboardShell>
	)
}

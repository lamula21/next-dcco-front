import { redirect } from 'next/navigation'

import { getServerCurrentUser } from '@/lib/session'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { NameForm } from '@/components/dashboard/NameForm'
import { PasswordForm } from '@/components/dashboard/PasswordForm'
import { TitleForm } from '@/components/dashboard/TitleForm'
import { EntityForm } from '@/components/dashboard/EntityForm'
import { CreditCardForm } from '@/components/dashboard/CreditCardForm'

export const metadata = {
	title: 'Settings',
	description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
	const user = await getServerCurrentUser()

	if (!user) {
		redirect('/login')
	}

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Settings"
				text="Manage account and website settings."
			/>
			<div className="grid gap-10">
				<NameForm user={{ id: user.id, name: user.name || '' }} />

				<PasswordForm user={user} />

				<div className="grid grid-cols-2 gap-5">
					<TitleForm user={user} />
					<EntityForm user={user} />
				</div>

				<CreditCardForm user={user} />
			</div>
		</DashboardShell>
	)
}

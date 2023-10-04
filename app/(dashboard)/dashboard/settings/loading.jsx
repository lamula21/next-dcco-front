import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'

export default function DashboardSettingsLoading() {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Settings"
				text="Manage account and website settings."
			/>
			<div className="grid gap-10">
				<CardSkeleton />
			</div>
		</DashboardShell>
	)
}

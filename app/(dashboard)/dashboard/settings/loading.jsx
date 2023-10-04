import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'

export default function DashboardSettingsLoading() {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Settings"
				text="Manage account and billing information."
			/>
			<div className="grid gap-10">
				<CardSkeleton />
			</div>
		</DashboardShell>
	)
}

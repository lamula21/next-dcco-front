import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'

export default function DashboardBillingLoading() {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Billing"
				text="Manage billing and your subscription plan."
			/>
			<div className="grid gap-10">
				<CardSkeleton />
			</div>
		</DashboardShell>
	)
}

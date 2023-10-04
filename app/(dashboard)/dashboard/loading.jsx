import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { PostItem } from '@/components/dashboard/Item'

export default function DashboardLoading() {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Dashboard"
				text="Welcome back user."
			></DashboardHeader>

			<div className="divide-border-200 divide-y rounded-md border">
				<PostItem.Skeleton />
			</div>
		</DashboardShell>
	)
}

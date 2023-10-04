import { notFound } from 'next/navigation'

import { getServerCurrentUser } from '@/lib/session'
import { FooterDashboard } from '@/components/dashboard/FooterDashboard'
import { SideNavDashboard } from '@/components/dashboard/SideNavDashboard'
import { UserAccountNav } from '@/components/dashboard/UserAccountNav'
import { MainNavDashboard } from '@/components/dashboard/MainNavDashboard'

async function DashboardLayout({ children }) {
	const user = await getServerCurrentUser()

	if (!user) {
		return notFound()
	}

	return (
		<div className="flex min-h-screen flex-col space-y-6 dashboard bg-background">
			<header className="sticky top-0 z-40 border-b backdrop-blur-md">
				<div className="container flex h-16 items-center justify-between py-4">
					<MainNavDashboard />
					<UserAccountNav
						user={{
							name: user.name,
							image: user.image,
							email: user.email,
						}}
					/>
				</div>
			</header>
			<div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
				<aside className="hidden w-[200px] flex-col md:flex">
					<SideNavDashboard />
				</aside>
				<main className="flex w-full flex-1 flex-col overflow-hidden">
					{children}
				</main>
			</div>
			<FooterDashboard className="border-t" />
		</div>
	)
}

DashboardLayout.theme = 'dashboard'
export default DashboardLayout

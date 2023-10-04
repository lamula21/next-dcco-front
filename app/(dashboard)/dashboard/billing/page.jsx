import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/authOptions'
import { getServerCurrentUser } from '@/lib/session'
// import { stripe } from '@/lib/stripe'
// import { getUserSubscriptionPlan } from '@/lib/subscription'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { BillingForm } from '@/components/dashboard/BillingForm'

import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { AlertTriangle } from 'lucide-react'

export const metadata = {
	title: 'Billing',
	description: 'Manage billing and your subscription plan.',
}

export default async function BillingPage() {
	const user = await getServerCurrentUser()

	console.log(user)

	if (!user) {
		redirect(authOptions?.pages?.signIn || '/login')
	}

	// const subscriptionPlan = await getUserSubscriptionPlan(user.id)

	// If user has a pro plan, check cancel status on Stripe.
	// let isCanceled = false
	// if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
	// 	const stripePlan = await stripe.subscriptions.retrieve(
	// 		subscriptionPlan.stripeSubscriptionId
	// 	)
	// 	isCanceled = stripePlan.cancel_at_period_end
	// }

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Billing"
				text="Manage your subscription plan."
			/>

			<div className="grid gap-8">
				<Alert className="!pl-14">
					<AlertTriangle />
					<AlertTitle>DCCOA is a demo app.</AlertTitle>
					<AlertDescription className="text-muted-foreground">
						We are working to integrate more features: Stripe, emailing,
						subscriptions. All features that works can be used interactively.
						The others are disabled. .
					</AlertDescription>
				</Alert>

				<BillingForm
				// subscriptionPlan={{
				// 	...subscriptionPlan,
				// 	isCanceled,
				// }}
				/>
			</div>
		</DashboardShell>
	)
}

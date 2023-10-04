'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { entitySchema } from '@/lib/validations/user'
import { buttonVariants } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { patchUserData } from '@/services/patchUserData'
import { zodResolver } from '@hookform/resolvers/zod'

export function EntityForm({ user, className, ...props }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(entitySchema),
		defaultValues: {
			gov_org_firm: user?.gov_org_firm || '',
		},
	})

	//  This is a hack to refresh the data on the page without a full refresh
	const refreshData = () => {
		router.replace(pathname)
	}

	async function onSubmit(data) {
		setLoading(true)

		const dataToUpdate = {
			_id: user.id,
			gov_org_firm: data.gov_org_firm,
		}

		const response = await patchUserData(dataToUpdate)

		setLoading(false)

		if (!response?.ok) {
			return toast.error('Something went wrong.', {
				description: 'This field was not updated. Please try again.',
			})
		}

		toast.success('This field has been updated.')

		// soft refresh
		refreshData()
	}

	return (
		<form
			className={cn(className)}
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle>Your Organization</CardTitle>
					<CardDescription>
						Enter the name of government, firm, or organization you are
						affiliated with.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="gov_org_firm">
							Organization name
						</Label>
						<Input
							id="gov_org_firm"
							className="w-full"
							size={32}
							{...register('gov_org_firm')}
						/>
						{errors?.name && (
							<p className="px-1 text-xs text-red-600">
								{errors.gov_org_firm.message}
							</p>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<button
						type="submit"
						className={cn(buttonVariants())}
						disabled={loading}
					>
						{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						<span>Save</span>
					</button>
				</CardFooter>
			</Card>
		</form>
	)
}

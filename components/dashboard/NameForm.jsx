'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { userNameSchema } from '@/lib/validations/user'
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
import { usePathname, useRouter } from 'next/navigation'

export function NameForm({ user, className, ...props }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(userNameSchema),
		defaultValues: {
			name: user?.name || '',
		},
	})

	//  This is a hack to refresh the data on the page without a full refresh
	const refreshData = () => {
		router.replace(pathname)
	}

	// handle submit for the form
	async function onSubmit(data) {
		setLoading(true)

		const dataToUpdate = {
			_id: user.id,
			name: data.name,
		}

		try {
			const response = await patchUserData(dataToUpdate)

			setLoading(false)

			if (!response?.ok) {
				return toast.error('Something went wrong.', {
					description: 'Your name was not updated. Please try again.',
				})
			}

			toast.success('Your name has been updated.')
		} catch (error) {
			setLoading(false)
			toast.error('Error on the server.', {
				description: 'Your name was not updated. Please try again.',
			})
		} finally {
			refreshData()
		}
	}

	return (
		<form
			className={cn(className)}
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle>Update Name</CardTitle>
					<CardDescription>
						Please enter your full name or display name you are comfortable
						with.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="name">
							Name
						</Label>
						<Input
							id="name"
							className="w-full"
							size={32}
							{...register('name')}
						/>
						{errors?.name && (
							<p className="px-1 text-xs text-red-600">{errors.name.message}</p>
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

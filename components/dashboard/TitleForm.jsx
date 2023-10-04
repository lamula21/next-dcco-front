'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { titleSchema } from '@/lib/validations/user'
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

export function TitleForm({ user, className, ...props }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(titleSchema),
		defaultValues: {
			title: user?.title || '',
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
			title: data.title,
		}

		const response = await patchUserData(dataToUpdate)

		setLoading(false)

		if (!response?.ok) {
			return toast.error('Something went wrong.', {
				description: 'Your title was not updated. Please try again.',
			})
		}

		toast.success('Your title has been updated.')

		// soft refresh
		refreshData()
	}

	return (
		<form
			className={cn(className)}
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<Card className="h-full flex flex-col justify-between">
				<CardHeader>
					<CardTitle>Your Title</CardTitle>
					<CardDescription>Enter your current title.</CardDescription>
				</CardHeader>
				<div className="flex flex-col">
					<CardContent>
						<div className="grid gap-1">
							<Label className="sr-only" htmlFor="title">
								Title
							</Label>
							<Input
								id="title"
								className="w-full"
								size={32}
								{...register('title')}
							/>
							{errors?.name && (
								<p className="px-1 text-xs text-red-600">
									{errors.title.message}
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
				</div>
			</Card>
		</form>
	)
}

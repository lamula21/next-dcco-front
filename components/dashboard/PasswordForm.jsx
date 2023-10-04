'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { passwordSchema } from '@/lib/validations/user'
import { Button, buttonVariants } from '@/components/ui/button'
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
import { toast } from 'sonner'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { patchUserData } from '@/services/patchUserData'

export function PasswordForm({ user, className, ...props }) {
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			password: '',
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
			password: data.password,
		}

		const response = await patchUserData(dataToUpdate)

		setLoading(false)

		if (!response?.ok) {
			return toast.error('Something went wrong.', {
				description: 'Your password was not updated. Please try again.',
			})
		}

		toast.success('Your password has been updated.')

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
					<CardTitle>Update Password</CardTitle>
					<CardDescription>
						Please enter a new strong password to safely secure your data.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-1">
						<div className="relative">
							<Label className="sr-only" htmlFor="password">
								Password
							</Label>
							<Input
								id="password"
								placeholder="********"
								type={showPassword ? 'text' : 'password'}
								className="w-full"
								size={32}
								{...register('password')}
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-[6px] top-0 h-full px-3 py-2 hover:bg-transparent"
								onClick={() => setShowPassword((prev) => !prev)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" aria-hidden="true" />
								) : (
									<Eye className="h-4 w-4" aria-hidden="true" />
								)}
								<span className="sr-only">
									{showPassword ? 'Hide password' : 'Show password'}
								</span>
							</Button>
						</div>

						{errors?.password && (
							<p className="px-1 text-xs text-red-600">
								{errors.password.message}
							</p>
						)}
					</div>
				</CardContent>

				<CardFooter className="flex gap-3 ">
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

'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useEffect, useState, useTransition } from 'react'

import { authSchema } from '@/lib/validations/auth'
import { Button } from '@/components/ui/button'
import { getAPIBasePath } from '@/lib/basePath'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { PasswordInput } from '@/components/PasswordInput'
import { useRouter } from 'next/navigation'

export function RegisterForm() {
	const router = useRouter()
	const [mounted, setMounted] = useState(false)
	const [isPending, startTransition] = useTransition()

	// react-hook-form
	const form = useForm({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// useTransition allows to defer state updates
	// until after the next paint.
	const onSubmit = async (data) => {
		startTransition(async () => {
			const basePath = getAPIBasePath()

			const signUpResponse = await fetch(`${basePath}/api/users`, {
				method: 'POST',
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			})

			const json = await signUpResponse.json()

			if (signUpResponse.status == 400) {
				toast.error(json?.message) // can custome the message
			}

			if (signUpResponse.status == 500) {
				toast.error(json?.message)
			}

			if (signUpResponse.ok) {
				toast.success('Account created successfully. Login to continue.')
				router.push('/login')
			}
		})
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Form {...form}>
			<form
				className="grid gap-4"
				onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="name@domain.com" {...field} />
							</FormControl>
							<FormMessage className="text-left" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<PasswordInput placeholder="**********" {...field} />
							</FormControl>
							<FormMessage className="text-left" />
						</FormItem>
					)}
				/>
				<Button disabled={isPending}>
					{isPending && (
						<Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
					)}
					{!isPending && <span>Sign Up with Email</span>}

					<span className="sr-only">Sign Up with Email</span>
				</Button>
			</form>
		</Form>
	)
}

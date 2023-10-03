'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'

import { authSchema } from '@/lib/validations/auth'
import { Button } from '@/components/ui/button'
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

export function LogInForm() {
	const router = useRouter()
	const [mounted, setMounted] = useState(false)
	const [loading, setLoading] = useState(false)

	// react-hook-form
	const form = useForm({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// Without useTransition. Look up register-form.jsx
	const onSubmit = async (data) => {
		try {
			setLoading(true)

			//e.g signInResult = { error: 'User not found', status: 200, ok: true, url: null }
			const signInResult = await signIn('credentials', {
				email: data.email.toLowerCase(),
				password: data.password,
				redirect: false,
			})

			console.log(JSON.stringify(signInResult, null, 2))

			if (signInResult?.error) {
				throw new Error(`The email or password you've entered is incorrect.`)
			}
			router.push('/dashboard')
		} catch (error) {
			toast.error(error?.message)
		} finally {
			setLoading(false)
		}
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
				<Button disabled={loading}>
					{loading && (
						<Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
					)}
					{!loading && <span>Sign In with Email</span>}

					<span className="sr-only">Sign In with Email</span>
				</Button>
			</form>
		</Form>
	)
}

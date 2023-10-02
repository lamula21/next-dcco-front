import Link from 'next/link'
import Logo from '@/public/logo-white.jpg'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { OAuthLogInButton } from '@/components/auth/oauth-login-button'
import { Shell } from '@/components/Shell'

import Image from 'next/image'
import { RegisterForm } from '@/components/forms/register-form'

export default function RegisterPage() {
	return (
		<Shell layout="auth" className="max-w-[30rem]">
			<Card className="bg-inherit border-none text-center">
				<CardHeader className="space-y-2">
					<Image
						src={Logo}
						className="h-24 w-24 rounded-full self-center mb-1"
						alt="DC Code Officials Association Official Logo"
					/>
					<CardTitle className="text-2xl">Create an account</CardTitle>
					<CardDescription>
						Choose your preferred sign up method
					</CardDescription>
				</CardHeader>

				<CardContent className="grid gap-5">
					{/* Login with Google Credentials */}
					<OAuthLogInButton />

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>

					{/* Login with Input Form */}
					<RegisterForm />
				</CardContent>

				<CardFooter className="flex flex-col flex-wrap items-center space-y-4">
					<div className="flex-1 text-sm text-muted-foreground underline-offset-4">
						Don&apos;t have an account?{' '}
						<Link
							aria-label="Sign up"
							href="/login"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign in
						</Link>
					</div>

					<p className="px-8 text-center text-sm text-muted-foreground">
						By clicking continue, you agree to our{' '}
						<Link
							href="/terms"
							className="underline underline-offset-4 hover:text-primary"
						>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link
							href="/privacy"
							className="underline underline-offset-4 hover:text-primary"
						>
							Privacy Policy
						</Link>
						.
					</p>
				</CardFooter>
			</Card>
		</Shell>
	)
}

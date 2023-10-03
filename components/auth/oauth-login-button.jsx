'use client'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { GoogleIconSVG } from '@/components/icons/google-icon'
import { Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function OAuthLogInButton() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(null)

	const oauthSignIn = async (provider) => {
		setIsLoading(true)

		try {
			const singInAuthResponse = await signIn(provider)

			if (singInAuthResponse?.error) {
				throw new Error(singInAuthResponse.error)
			}

			// everythin ok redirect to dashboard
			return router.push('/dashboard')
		} catch (error) {
			const unknownError = 'Something went wrong, please try again.'

			if (error instanceof Error) {
				return toast.error(error.message || unknownError)
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="w-full">
			<Button
				aria-label={`Sign in with Google`}
				variant="outline"
				className="w-full bg-inherit shadow-white"
				onClick={() => void oauthSignIn('google')}
				disabled={isLoading !== null}
			>
				{isLoading && (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
				)}
				{!isLoading && <GoogleIconSVG className="mr-2 w-4 h-4" />}
				Google
			</Button>
		</div>
	)
}

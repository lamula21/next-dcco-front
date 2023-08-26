'use client'

import Image from 'next/image'
import GoogleIcon from '@/components/icons/google-icon'

import { Button } from './ui/button'

export default function LoginForm() {
	return (
		<div className="bg-[#222] p-6 w-[35rem] rounded-md border border-white/50 space-y-5">
			<div className="flex flex-col space-y-5">
				<div>
					<h3 className="font-semibold tracking-tight text-center text-3xl">
						Sign In
					</h3>
					<p className="text-sm text-muted-foreground text-center">
						Choose your preferred sign in method
					</p>
				</div>
			</div>

			<div className="grid gap-4">
				<div className="grid grid-cols-1 sm:gap-4">
					<Button className="w-full inline-flex items-center">
						<GoogleIcon className="mr-2 h-4 w-4" /> Google
					</Button>
				</div>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t border-white " />
					</div>

					<div className="relative flex justify-center text-xs uppercase">
						<span className="px-2 text-muted-foreground bg-[#222]">
							Or continue with
						</span>
					</div>
				</div>

				<form className="grid gap-4">
					<div className="space-y-2">
						<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							Email
						</label>
						<input
							className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							placeholder="example123@domain.com"
							name="email"
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							Password
						</label>
						<div className="relative">
							<input
								type="password"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								placeholder="Password"
								name="password"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-[#C07331] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign in
						</button>
					</div>

					<p className="mt-2 text-sm text-gray-500">
						Don&apos;t have an account?{' '}
						<a
							href="#"
							className="font-semibold leading-6 text-[#C07331] hover:text-yellow-700"
						>
							Sign up
						</a>
					</p>
				</form>
			</div>
		</div>
	)
}

'use client'
import { toast } from 'sonner'

async function postNewsletter() {
	const res = await fetch(
		'http://localhost:3000/api/products'
		//, {method: 'POST',}
	)

	return await res.json()
}

export default function NewsletterForm() {
	async function handleSubmit(e) {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const name = formData.get('name')
		const email = formData.get('email')

		// render sonner promise message
		toast.promise(postNewsletter, {
			loading: 'Subscribing to newsletter...',
			success: (data) => {
				return 'Congrats! You are now subscribed.'
			},
			error: 'Oops, something went wrong.',
		})
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="mt-6 flex flex-row max-w-md gap-x-2"
		>
			<label htmlFor="name" className="sr-only">
				Username
			</label>
			<input
				id="name"
				name="name"
				type="text"
				autoComplete="name"
				required
				className="w-[8rem] min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
				placeholder="Enter your name"
			/>

			<label htmlFor="email-address" className="sr-only">
				Email address
			</label>
			<input
				id="email-address"
				name="email"
				type="email"
				autoComplete="email"
				required
				className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
				placeholder="Enter your email"
			/>
			<button className="flex-none rounded-md bg-[#C07331] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
				Subscribe
			</button>
		</form>
	)
}

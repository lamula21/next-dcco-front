'use client'
import { postNewSubscriber } from '@/services/postSubscriber'
import { toast } from 'sonner'

export default function NewsletterForm() {
	async function handleSubmit(e) {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const data = {
			fullname: formData.get('fullname'),
			email: formData.get('email'),
		}

		// render sonner promise message
		toast.promise(() => postNewSubscriber(data), {
			loading: 'Subscribing to newsletter...',
			success: (data) => {
				if (data?.message) {
					throw new Error(data.message)
				}
				return `Congrats ${data.fullname || ''}! You are now subscribed.`
			},
			error: "We're sorry. You are already subscribed.",
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
				name="fullname"
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

export function Newsletter() {
	return (
		<div className="relative isolate overflow-hidden rounded-2xl py-16 sm:py-24 lg:py-32 border border-white/50 backdrop-blur-3xl">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-[#C07331] sm:text-4xl">
							Want to know what's happening?
						</h2>
						<p className="mt-4 text-lg leading-8 text-white">
							Sign up for our quarterly newsletter and become part of our tribe
						</p>
						<div className="mt-6 flex max-w-md gap-x-4">
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
							<button
								type="submit"
								className="flex-none rounded-md bg-[#C07331] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
							>
								Subscribe
							</button>
						</div>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<i className="bx bxs-calendar text-2xl" />
							</div>
							<span className="mt-4 font-semibold  text-[#C07331]">
								Quarterly newsletter
							</span>
							<p className="mt-2 leading-7 text-white">
								Receive our quarterly newsletter, packed with the latest
								updates, seminars, and e-courses.
							</p>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<i className="bx bxs-hand text-2xl" />
							</div>
							<span className="mt-4 font-semibold  text-[#C07331]">
								No spam
							</span>
							<p className="mt-2 leading-7 text-whie">
								Your inbox is safe with us. We promise, no spam – just
								meaningful content in every newsletter.
							</p>
						</div>
					</dl>
				</div>
			</div>
		</div>
	)
}

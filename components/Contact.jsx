export function Contact() {
	const mapeStyle = {
		filter: 'opacity(0.80)',
	}
	return (
		<section className="text-gray-400 bg-gray-900 body-font relative">
			<div className="absolute inset-0 bg-gray-900">
				<iframe
					title="map"
					width="100%"
					height="100%"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.7229529584088!2d-77.04178902359686!3d38.90745034611015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c74cd4d7b7%3A0x9eec5b8ede81b0!2s1717%20N%20St%20NW%20%231%2C%20Washington%2C%20DC%2020036!5e0!3m2!1sen!2sus!4v1692328388776!5m2!1sen!2sus"
					style={mapeStyle}
				></iframe>
			</div>
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-[#222] shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">
					<h2 className="text-white text-lg mb-1 font-medium title-font">
						Contact Us
					</h2>
					<p className="leading-relaxed mb-5">
						We appreciate your interest and will get back to you as soon as
						possible.
					</p>

					<div className="relative mb-4 flex gap-4">
						<div>
							<label
								htmlFor="name"
								className="leading-7 text-sm text-[#D6D3CD]"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>

						<div>
							<label
								htmlFor="phone"
								className="leading-7 text-sm text-[#D6D3CD]"
							>
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>

					<div className="relative mb-2">
						<label
							htmlFor="contact-email"
							className="leading-7 text-sm text-[#D6D3CD] after:content-['*'] after:ml-1 after:text-red-500"
						>
							Email
						</label>
						<input
							type="email"
							id="contact-email"
							className="peer w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
						<p className="mt-1 invisible peer-invalid:visible text-red-500 text-sm">
							Please provide a valid email address.
						</p>
					</div>

					<div className="relative mb-2">
						<label
							htmlFor="dropdown"
							className="leading-7 text-sm text-[#D6D3CD]"
						>
							Reason
						</label>
						<select
							id="dropdown"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
						>
							<option>Membership</option>
							<option>Sponsorship</option>
							<option>E-Courses</option>
							<option>Others</option>
						</select>
					</div>

					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-[#D6D3CD]"
						>
							Message
						</label>
						<textarea
							id="message"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-700 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
					<button className="text-white bg-[#C07331] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
						Button
					</button>
				</div>
			</div>
		</section>
	)
}

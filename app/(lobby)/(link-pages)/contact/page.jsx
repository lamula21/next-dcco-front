import { InputJV } from '@/components/Input'
import { TextAreaJV } from '@/components/TextArea'

export default function ContactPage() {
	const mapeStyle = {
		filter: 'opacity(0.80)',
	}
	return (
		<main className="bg-[#222] w-full">
			<section className="container text-gray-600 body-font relative">
				<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
					<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
						<div className="absolute inset-0 bg-gray-900">
							<iframe
								title="map"
								width="100%"
								height="100%"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.7229529584088!2d-77.04178902359686!3d38.90745034611015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c74cd4d7b7%3A0x9eec5b8ede81b0!2s1717%20N%20St%20NW%20%231%2C%20Washington%2C%20DC%2020036!5e0!3m2!1sen!2sus!4v1692328388776!5m2!1sen!2sus"
								style={mapeStyle}
							></iframe>
						</div>
						<div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
							<div className="lg:w-1/2 px-6">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
									ADDRESS
								</h2>
								<p className="mt-1">
									1717 N St NW Suite#1, Washington, DC 20036
								</p>
							</div>
							<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
									EMAIL
								</h2>
								<a className="text-indigo-500 leading-relaxed">
									info@dccodeoffficials.com
								</a>
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
									WEBSITE
								</h2>
								<p className="leading-relaxed">TBA</p>
							</div>
						</div>
					</div>

					<div className="lg:w-1/3 md:w-1/2 bg-[#222] border border-white/30 rounded-lg flex flex-col md:ml-auto w-full md:py-8  md:px-8 mt-8 md:mt-0">
						<h2 className="text-white text-lg mb-1 font-medium title-font">
							Contact Us
						</h2>
						<p className="leading-relaxed mb-5 text-gray-400">
							We appreciate your interest and will get back to you as soon as
							possible.
						</p>

						<div className="relative mb-4 flex gap-4">
							<InputJV
								placeholder="Name"
								inputType="text"
								inputName="name"
								inputId="contact-us-name"
								noFocusColor="gray-500"
								focusColor="yellow-700"
								inputColor="gray-100"
								bgColor="gray-800"
								textDisabledColor="gray-500/50"
								bgDisabledColor="gray-700"
							/>

							<InputJV
								placeholder="Phone Number"
								inputType="tel"
								inputName="phone"
								inputId="contact-us-phone"
								noFocusColor="gray-500"
								focusColor="yellow-700"
								inputColor="gray-100"
								bgColor="gray-800"
								textDisabledColor="gray-500/50"
								bgDisabledColor="gray-700"
							/>
						</div>

						<div className="relative mb-2">
							<InputJV
								placeholder="Email"
								inputType="email"
								inputName="email"
								inputId="contact-us-email"
								noFocusColor="gray-500"
								focusColor="yellow-700"
								inputColor="gray-100"
								bgColor="gray-800"
								textDisabledColor="gray-500/50"
								bgDisabledColor="gray-700"
							/>

							<p className="mt-1 invisible peer-invalid:visible text-red-500 text-sm">
								Please provide a valid email address.
							</p>
						</div>

						<div className="relative mb-2">
							<label
								htmlFor="dropdown"
								className="leading-7 text-sm text-white"
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
							<TextAreaJV
								placeholder="Message"
								inputType="text"
								inputName="message"
								inputId="contact-us-message"
								noFocusColor="gray-500"
								focusColor="yellow-700"
								inputColor="gray-100"
								bgColor="gray-800"
								textDisabledColor="gray-500/50"
								bgDisabledColor="gray-700"
							/>
						</div>
						<button className="text-white bg-[#C07331] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
							Send
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}

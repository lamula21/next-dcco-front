import { FooterLink } from './FooterLink'
import IconLink from './IconLink'

export function Footer() {
	return (
		<div className="flex flex-col bg-[#222] border-t border-[#333]">
			<footer className="py-20 px-[13%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_auto))] gap-14">
				<div className="footer-content">
					<h4 className="mb-3 text-xl font-bold">Contact Information</h4>

					<div className="flex text-[#d6d6d6] text-base  items-center">
						<IconLink
							href="https://www.dccodeofficials.com"
							iconClass="bx bx-globe"
							className="mr-2"
						/>
						<span className="py-2">www.dccodeofficials.com</span>
					</div>

					<div className="flex text-[#d6d6d6] text-base items-center">
						<IconLink iconClass="bx bxs-envelope" className="mr-2" />
						<span className="py-2">info@dccodeoffficials.com</span>
					</div>

					<div className="flex text-[#d6d6d6] text-base items-center">
						<span className="py-2">
							<IconLink href="#" iconClass="bx bxs-home" className="mr-2" />
						</span>
						<span>1717 N St NW Suite#1, Washington, DC 20036</span>
					</div>
				</div>

				<div className="footer-content">
					<h4 className="mb-3 text-xl font-bold">Quick Links</h4>
					<FooterLink href="#" title="Home" />
					<FooterLink href="#" title="About" />
					<FooterLink href="#" title="Join Us" />
					<FooterLink href="#" title="ICC" />
					<FooterLink href="#" title="Region VII" />
				</div>

				<div className="footer-content">
					<h4 className="mb-3 text-xl font-bold">Company</h4>

					<FooterLink href="#" title="Careers" />
					<FooterLink href="#" title="Events" />
					<FooterLink href="#" title="Locations" />
					<FooterLink href="#" title="Developers" />
					<FooterLink href="#" title="Privacy Policy" />
				</div>

				<div className="footer-content">
					<h4 className="mb-3 text-xl font-bold">Stay Connected!</h4>

					<img src="" alt="" />
					<p className="py-2 text-[#d6d6d6] text-base font-normal max-w-sm">
						Want to know what we&apos;re up to? Sign up for the newsletter and
						join our tribe.
					</p>
					<div className="relative flex mt-5">
						<input
							id="email"
							type="email"
							placeholder="Enter your Email"
							className="peer h-10 border-b-2 border-gray-300 text-[#d6d6d6] bg-transparent placeholder-transparent focus:outline-none focus:border-[#C07331]"
						/>

						<label
							htmlFor="email"
							className="cursor-pointer absolute left-0 -top-3.5 text-[#d6d6d6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-[#d6d6d6] peer-focus:text-sm peer-focus:font-normal"
						>
							Enter your email
						</label>

						<button
							type="submit"
							className="group w-10 h-10 border-b-2 border-gray-300 peer-focus:border-[#C07331] hover:text-[#C07331]"
						>
							<i className="bx bx-chevron-right text-2xl transition-transform group-hover:translate-x-2"></i>
						</button>
					</div>

					<div className="icons flex gap-2 mt-5">
						<IconLink
							href="https://www.linkedin.com/company/dccoa/"
							iconClass="bx bxl-linkedin-square"
						/>
						<IconLink
							href="https://twitter.com/DCCOA1"
							iconClass="bx bxl-twitter"
						/>
					</div>
				</div>
			</footer>

			<footer className="border-t border-[#333]">
				<div className="mx-auto py-5">
					<p className="text-center text-xs text-[#d6d6d6]">
						&copy; 2023 DC Code Official Association, Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}

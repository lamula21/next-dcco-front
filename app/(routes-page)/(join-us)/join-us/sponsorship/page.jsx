import SectionHeader from '@/app/(routes-page)/components/SectionHeader'
import Link from 'next/link'

export default function SponsorshipPage() {
	return (
		<main className="bg-[#222]">
			<section className="container py-24 flex flex-col gap-10">
				<SectionHeader
					title="Welcome Returning Sponsors"
					subtitle="SPONSORSHIP"
					description="We are so excited to have you back! We're looking forward to working with you this year. Please fill out the form below to confirm your sponsorship for this year."
				/>

				<p>
					Currently, DCCOA is looking for sponsors interested in supporting our
					mission to further advance local and international building and
					construction codes. This will encourage and promote the building and
					construction of safe and healthy buildings through professional
					development, education and training, and consistent, uniform
					interpretations of code enforcement which fosters better public
					understanding of building and construction codes.
				</p>

				<p>
					Funding from sponsors directly contributes to programs, web and social
					media presence, and meetings.
				</p>

				<p>
					Here is the link to the{' '}
					<Link
						href="https://www.canva.com/design/DAFmmnpnFBE/2M_ApDpJJlBXBefmkwDypg/view?utm_content=DAFmmnpnFBE&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel"
						target="_blank"
						className="underline text-[#C07331]"
					>
						Sponsorship Package
					</Link>{' '}
				</p>

				<div className="flex justify-center">
					<button className="basis-28 rounded-md bg-[#C07331] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
						Sponsor Us
					</button>
				</div>
			</section>
		</main>
	)
}

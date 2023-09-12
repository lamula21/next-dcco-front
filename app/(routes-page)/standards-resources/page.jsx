import SectionHeader from '../components/SectionHeader'
import AccordionStandard from './AccordionStandard'

export default function StandardsPage() {
	return (
		<main className="bg-[#222]">
			<section className="container py-24 flex flex-col gap-10">
				<SectionHeader subtitle="STANDARDS & RESOURCES" title="Code/Standard" />

				<p>Effective as of Friday, May 29th, 2020.</p>
				<p>
					The 2017 District of Columbia Municipality Regulations (DCMR)
					building, and construction codes adopts the International Council Code
					(ICC)family of codes and make amendments to consist with the
					city&apos;s 2032 Sustainable D.C. Plan in which the District becomes
					the healthiest, greenest, most livable city for all District
					residents.
				</p>
				<p>
					The 2017 DCMR consist of the 2015 ICC family of model codes, the 2014
					National Electrical Code, and 2013 ASHRAE 90.1, as amended by the
					District of Columbia Municipal Regulations (DCMR) Title 12, Sections A
					through M.
				</p>
				<p>
					Applicability and provisions for the prior editions of the code, (for
					Permits issued, Applications Filed, Tenant Layouts and Permit
					Revisions) will be governed by the Transitory Provision stipulated in
					section 123. For your convenience, below you will find a link to the
					DC amendments followed by a links to the associated ICC model codes or
					other adopted model code:
				</p>

				<a
					href="https://www.dcregs.dc.gov/Common/DCMR/SubTitleList.aspx?TitleId=34"
					className="underline"
				>
					All DCMR Title 12 Admendments
				</a>

				<AccordionStandard />
			</section>
		</main>
	)
}

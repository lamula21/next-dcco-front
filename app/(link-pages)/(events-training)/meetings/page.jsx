import ProfessionalLogo from '@/public/logo-professional-dev.png'
import IccLogo from '@/public/logo-icc.png'
import DccoaTrainingLogo from '@/public/logo-training-dccoa.png'
import EcoursesLogo from '@/public/logo-ecourses.png'

import { fetchCalendar } from '@/services/fetchCalendar'
import { Calendar } from './Calendar'
import { CardLink } from '@/components/CardLink'
import SectionHeader from '../../components/SectionHeader'

export default async function CalendarPage() {
	const events = await fetchCalendar()

	return (
		<main className="bg-[#222]">
			<section className="h-full pl-16 pt-20">
				<SectionHeader subtitle="CALENDAR" title="Our Recent Events" />
				<Calendar events={events} />
			</section>

			<section className="container my-24 flex flex-col gap-10">
				<SectionHeader subtitle="EVENTS & TRAINING" title="Useful Links" />

				<div className="container grid grid-cols-2 md:grid-cols-4  text-center gap-5">
					<CardLink
						src={ProfessionalLogo}
						href="/"
						title="Professional Development"
					/>

					<CardLink src={IccLogo} href="/" title="ICC Training" />

					<CardLink src={DccoaTrainingLogo} href="/" title="DCCOA Training" />

					<CardLink src={EcoursesLogo} href="/" title="eCourses" />
				</div>
			</section>
		</main>
	)
}

import { fetchCalendar } from '@/services/fetchCalendar'

import SectionHeader from '../../components/SectionHeader'
import { Calendar } from './Calendar'

export default async function CalendarPage() {
	const events = await fetchCalendar()

	console.log(events)

	return (
		<main className="bg-[#222]">
			<div className="h-full pl-16 pt-20 pb-36">
				<SectionHeader subtitle="CALENDAR" title="Our Recent Events" />
				<Calendar events={events} />
			</div>
		</main>
	)
}

import { fetchCalendar } from '@/services/fetchCalendar'

import SectionHeader from '../../components/SectionHeader'
import { Calendar } from './Calendar'

export default async function CalendarPage() {
	const events = await fetchCalendar()

	if (events.error) {
		const mockedEvents = [
			{
				_id: 1,
				title: 'This is a Mocked Up Title',
				description: `Join us for a General Meeting where we'll discuss all things related to our community. This online event is open to everyone who wants to participate. It's a great opportunity to connect with like minded individuals and share ideas. Whether you're a long-time member or new to our community, we welcome your presence and input. Don't miss out on this chance to be part of the conversation. Grab your favorite beverage, find a cozy spot,and get ready to engage in livelydiscussions. We look forward to seeing you there!`,
				date: 'September 5th, 2023',
				init_time: '10:00',
				end_time: '18:50',
				imageUrl: [
					'https://res.cloudinary.com/lamula/image/upload/v1694390507/Screenshot_from_2023-09-10_17-47-24_td6kna.png',
				],
				address: 'Online',
			},
			{
				_id: 2,
				title: 'Event 2',
				description:
					'This is a Mocked Up Description for Event 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
				date: 'September 5th, 2023',
				init_time: '12:00',
				end_time: '13:00',
				imageUrl: [
					'https://res.cloudinary.com/lamula/image/upload/v1694478170/campus_wc8fgx.jpg',
				],
				address: 'In-Person',
			},
			{
				_id: 3,
				title: 'This is a Mocked Up Title',
				description: `Join us for a General Meeting where we'll discuss all things related to our community. This online event is open to everyone who wants to participate. It's a great opportunity to connect with like minded individuals and share ideas. Whether you're a long-time member or new to our community, we welcome your presence and input. Don't miss out on this chance to be part of the conversation. Grab your favorite beverage, find a cozy spot,and get ready to engage in livelydiscussions. We look forward to seeing you there!`,
				date: 'September 1st, 2023',
				init_time: '14:44',
				end_time: '15:44',
				imageUrl: [
					'https://res.cloudinary.com/lamula/image/upload/v1694390507/Screenshot_from_2023-09-10_17-47-24_td6kna.png',
				],
				address: 'Online',
			},
		]
		return (
			<main className="bg-[#222]">
				<div className="h-full pl-16 pt-20 pb-36">
					<SectionHeader subtitle="CALENDAR" title="Our Recent Events" />
					<Calendar events={mockedEvents} />
				</div>
			</main>
		)
	}

	return (
		<main className="bg-[#222]">
			<div className="h-full pl-16 pt-20 pb-36">
				<SectionHeader subtitle="CALENDAR" title="Our Recent Events" />
				<Calendar events={events} />
			</div>
		</main>
	)
}

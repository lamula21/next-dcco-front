import { notFound } from 'next/navigation'
import { MEMBERSHIP_PLANS } from '@/utils/membership-plans'

export default function page({ params }) {
	const { title } = params

	if (!Object.values(MEMBERSHIP_PLANS).includes(title)) {
		notFound()
	}

	return <div>{title}</div>
}

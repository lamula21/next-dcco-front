import SectionHeader from '../../components/SectionHeader'
import { MembershipCard } from '../components/MembershipCard'
import { membership_data } from '../components/membership-data'

export default function MembershipPage() {
	return (
		<main className="bg-[#222]">
			<section className="container py-24 flex flex-col gap-10">
				<SectionHeader
					subtitle="JOIN US"
					title="Membership Levels"
					description="Join us today in our shared mission of elevating safety and security. Your decision to engage with DCCOA marks not only a personal choice, but a pivotal step towards enhancing the safety of our world for all."
				/>

				<div className="flex flex-wrap mx-auto">
					{membership_data.map((item) => {
						return (
							<MembershipCard
								key={item.id}
								price={item.price}
								title={item.title}
								bullet_points={item.bullet_points}
							></MembershipCard>
						)
					})}
				</div>
			</section>
		</main>
	)
}

import { MembershipCard } from '../components/MembershipCard'
import { membership_data } from '../components/membership-data'

export default function MembershipPage() {
	return (
		<main className="bg-[#222]">
			<section className="container py-24 flex flex-col gap-10">
				<div className="text-left lg:text-center">
					<div className="lg:pr-4">
						<div className="lg:mx-auto lg:max-w-3xl">
							<p className="text-sm lg:text-base font-semibold leading-7 text-[#C07331]">
								JOIN US
							</p>
							<h1 className="mt-2 text-2xl lg:text-3xl font-bold lg:tracking-tight text-[#D6D3CD] ">
								Membership Levels
							</h1>
							<p className="mt-6 text-base lg:text-xl lg:leading-8 text-[#D6D3CD]">
								Join us today in our shared mission of elevating safety and
								security. Your decision to engage with DCCOA marks not only a
								personal choice, but a pivotal step towards enhancing the safety
								of our world for all.
							</p>
						</div>
					</div>
				</div>

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

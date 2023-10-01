import hero3 from '@/public/hero-section3.jpg'
import Image from 'next/image'

import MissionCard from '../components/MissionCard'
import { Contact } from '@/components/Contact'
import SectionHeader from '../../components/SectionHeader'

export default function AboutPage() {
	return (
		<main className="bg-[#222]">
			<section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="text-base font-semibold leading-7 text-[#C07331]">
									ABOUT US
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-[#D6D3CD] sm:text-4xl">
									Who We Are
								</h1>
								<p className="mt-6 text-xl leading-8 text-[#D6D3CD]">
									We represent a chapter of The International Code Council, a
									prominent worldwide provider of model codes, standards, and
									solutions for building safety, situated in Washington D.C.,
									among numerous other chapters.
								</p>
							</div>
						</div>
					</div>
					<div className="z-20 -ml-12 -mt-12 p-12 pb-5 lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<Image
							className="object-cover object-center aspect-[5/3] w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-lg shadow-black ring-1 ring-gray-400/10 sm:w-[57rem]"
							src={hero3}
							alt=""
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-[#B1AAA0] lg:max-w-lg">
								<p>
									The DC Code Officials Association (DCCOA) is a professional
									organization for active building code officials in Washington,
									D.C. Originally started in 2011, it the Washington, D.C.
									Chapter of the International Council (ICC). Core membership
									comprises D.C.-government employees associated with building
									(and zoning) code enforcement, and individuals actively
									involved in the DCRA Thrid Party Program. In most cases, these
									individuals will be involved in building plan review, building
									inspections, and related activities. Broader participation of
									interested parties, including architects, engineers,
									contractors, developers, and others interested in improving
									code enforcement in D.C., is warmly invited.
								</p>
								<ul role="list" className="mt-8 space-y-8 text-gray-600">
									<li className="flex gap-x-3">
										<i className="bx bxs-map mt-1 h-5 w-5 flex-none text-[#C07331] text-2xl"></i>
										<span className="text-[#B1AAA0]">
											<strong className="font-semibold text-[#D6D3CD]">
												Established in D.C.{' '}
											</strong>
											DCCOA is the D.C. chapter of ICC, supporting building code
											officials since 2011.
										</span>
									</li>
									<li className="flex gap-x-3">
										<i className="bx bxs-briefcase mt-1 h-5 w-5 flex-none text-[#C07331] text-2xl"></i>
										<span className="text-[#B1AAA0]">
											<strong className="font-semibold text-[#D6D3CD]">
												Earn certificates.
											</strong>{' '}
											DCCOA provides services for government employees in code
											enforcement and the DCRA Third Party Program.
										</span>
									</li>
									<li className="flex gap-x-3">
										<i className="bx bxs-hard-hat mt-1 h-5 w-5 flex-none text-[#C07331] text-2xl"></i>
										<span className="text-[#B1AAA0]">
											<strong className="font-semibold text-[#D6D3CD]">
												We are professionals.
											</strong>{' '}
											The association invites broader involvement from
											professionals to enhance D.C&apos;s code enforcement.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission */}
			<section className="container py-14">
				<SectionHeader
					subtitle="OUR MISSION"
					title="What We Do"
					description="The District of Columbia Code Officials Association (DCCOA) is an affiliated chapter of the International Code Council (ICC) and shall promote its purposes."
				/>

				<div className="px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						<MissionCard
							title="Promote Safety"
							description="Enhance safety by educating those overseeing Washington, D.C. Construction Codes, including broader International Construction Codes development."
							href=""
							iconStyle="bx bx-health"
						/>
						<MissionCard
							title="Promote the protection of life"
							description="Promote safety for life and property, and ensure code consistency through collaboration with D.C. area development, building, and inspection departments."
							href=""
							iconStyle="bx bxs-check-shield"
						/>
						<MissionCard
							title="Foster a better public understanding"
							description="Strenghten public awareness for the proper administration of development and building codes for the wellbeing, welfare, and prosperity of municipalities and counties."
							href=""
							iconStyle="bx bxs-book-reader"
						/>
						<MissionCard
							title="Improve the professionalism"
							description="Elevate the professionalism of Building and Code Enforcement Officials by upholding high standards in code administration and development through ongoing education and training."
							href=""
							iconStyle="bx bxs-briefcase-alt-2"
						/>
						<MissionCard
							title="Promote uniform interpretion and enforcement"
							description="Ensure consistent code interpretations through meetings with government officials focused on development and building codes, facilitating idea exchange and issue resolution."
							href=""
							iconStyle="bx bxs-book-open"
						/>
						<MissionCard
							title="Develop courses of instruction"
							description="Create courses alone or with educational partners to ensure consistent understanding, enforcement, and administration of development, building codes, and related ordinances."
							href=""
							iconStyle="bx bxs-edit-alt"
						/>
					</div>
				</div>
			</section>

			<Contact />
		</main>
	)
}

import hero4 from '@/public/hero4.jpg'

import { Section1_2 } from '@/components/Section1_2'

export default function HomePage() {
	return (
		<main className='bg-[#222]'>
			<Section1_2 />

			<div className='section-3 h-screen px-20 py-32'>
				<div className='grid grid-cols-[2fr_4fr_2fr] gap-y-10 '>
					<div className='col-start-2'>
						<h2 className='scroll-m-20 border-b border-zinc-700 pb-2 text-2xl font-extrabold tracking-[0.14em] uppercase  transition-colors mt-0 text-[#ddd]'>
							About us
						</h2>
						<p className='p1 leading-8 mt-6 wrap'>
							The DC Code Officials Association (DCCOA) is a professional
							organization for active building code officials in Washington,
							D.C. Originally started in 2011, it is the Washington, D.C.
							Chapter of the International Code Council (ICC). Core membership
							comprises D.C.-government employees associated with building (and
							zoning) code enforcement, and individuals actively involved in the
							DCRA Third Party Program. In most cases, these individuals will be
							involved in building plan review, building inspections, and
							related activities. Broader participation of interested parties,
							including architects, engineers, contractors, developers, and
							others interested in improving code enforcement in D.C., is warmly
							invited.
						</p>
					</div>
				</div>
			</div>

			<div
				className="section-4 relative h-screen bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:z-10 before:h-[85%] before:bg-gradient-to-b before:from-transparent before:to-[#0000004d_100%]"
				style={{ backgroundImage: `url(${hero4.src})` }}
			></div>

			<div className='section-5 h-screen px-20 py-32'>
				<div className='grid grid-cols-[1.5fr_4fr_1.5fr] gap-y-10 '>
					<div className='col-start-2'>
						<h2 className='scroll-m-20 border-b border-zinc-700 pb-2 text-2xl font-extrabold tracking-[0.14em] uppercase  transition-colors mt-0 text-[#ddd]'>
							Our Mission
						</h2>

						<p className='leading-7 [&:not(:first-child)]:mt-6'>
							The District of Columbia Code Officials Association (DCCOA) is an
							affiliated chapter of the International Code Council (ICC) and
							shall promote its purposes.
						</p>

						<ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
							<li>
								<strong>Promote safety</strong> to life, health, and property
								through the education and training of individuals involved in
								the administration, enforcement, and development of the
								Washington DC Construction Codes and all related ordinances, as
								well as the broader International Construction Codes code
								development process.
							</li>
							<li>
								<strong>Promote the protection of life</strong> and property and
								greater uniformity of codes through coordination with the
								greater District of Columbia area development, building and
								inspection departments & interests;
							</li>
							<li>
								<strong>Foster a better public understanding</strong> and
								appreciation for the proper administration of development and
								building codes and all related ordinances and their importance
								to the health, safety, welfare, and prosperity of municipalities
								and counties;
							</li>
							<li>
								<strong>Improve the professionalism</strong> of Building
								Officials and related Code Enforcement Officials by the
								promotion of high standards of efficiency in the administration
								and development of building codes and all related ordinances
								through continuous education and training;
							</li>

							<li>
								<strong>Promote uniform interpretations and enforcement</strong>
								of development and construction codes by meeting with other
								government officials and organized groups concerned with
								development and building codes and all related ordinances to
								exchange ideas and discuss mutual problems; and
							</li>

							<li>
								<strong>Develop courses of instruction</strong> singularly or in
								cooperation with recognized educational institutions to promote
								consistent interpretations, enforcement, and administration of
								development and building codes and all related ordinances.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}

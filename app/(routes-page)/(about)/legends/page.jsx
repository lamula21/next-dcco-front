import delgado from '@/public/ashley.jpg'
import griggs from '@/public/griggs.png'
import camacho from '@/public/camacho.jpg'
import walocha from '@/public/walocha.jpg'
import whitescarve from '@/public/whitescarve.png'

import { MemberHeader } from '../components/MemberHeader'
import { MemberList } from '../components/MemberList'

export default function CommiteesPage() {
	return (
		<main className="bg-[#222] py-32 w-full">
			{/* Legends */}
			<section className="container">
				<MemberHeader
					className="px-6"
					title="Legends"
					description="Meet our former professionals at DCCOA"
					textStyle="text-[#C07331]"
				/>

				<div className="px-6 my-20 grid grid-cols-1 gap-x-8 gap-y-10  max-w-7xl xl:px-8 xl:grid-cols-5">
					<div className="m-0 sm:text-left col-span-2 max-w-2xl sticky xl:text-center xl:col-span-2 ">
						<MemberHeader
							className="xl:sticky xl:top-40"
							title="2020-2021"
							textStyle="text-start text-3xl md:text-4xl xl:text-center"
						/>
					</div>
					<ul className="xl:col-span-3">
						<MemberList
							className="pt-0 sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={delgado}
							alt="Ashley Delgado Picture"
							name="Ashley Delgado"
							position="Former President of DCCOA"
						/>

						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							alt="Default Avatar"
							name="Keith Winston"
							position="Former Vice President"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							alt="Default Avatar"
							name="Leslie Alarcon"
							position="Former Treasurer"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							alt="Default Avatar"
							name="Nicolle Allen"
							position="Membership Committe Chair"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={camacho}
							alt="Avatar of Leslie Camacho"
							name="Leslie Camacho"
							position="Program Analyst and Former Education Committee Chair"
						></MemberList>
					</ul>
				</div>

				<div className="px-6 my-20 grid grid-cols-1 gap-x-8 gap-y-10  max-w-7xl xl:px-8 xl:grid-cols-5">
					<div className="m-0 sm:text-left col-span-2 max-w-2xl sticky xl:text-center xl:col-span-2">
						<MemberHeader
							className="xl:sticky xl:top-40"
							title="2019-2020"
							textStyle="text-start text-3xl md:text-4xl xl:text-center"
						/>
					</div>

					<ul className="xl:col-span-3">
						<MemberList
							className="pt-0 sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={whitescarve}
							alt="Garret Whitescarve Picture"
							name="Garret Whitescarve"
							position="Chief Builiding Code Official of the Deparment of building (DOB) Former President of DCCOA"
						/>

						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={walocha}
							alt="Tim Walocha Avatar"
							name="Tim Walocha"
							position="Former Residential Plans Reviewer at the Department of Buildings (DOB), Former Vice President of DCCOA"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={delgado}
							alt="Ashley Delgado Avatar"
							name="Ashley Delgado"
							position="Energy Plans Reviewer at the Department of Buildings (DOB) Former Secretary and Treasurer"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={camacho}
							alt="Leslie Camacho Avatar"
							name="Leslie Camacho"
							position="Program Analysts at the Department of Buildings. Principal of the National Capitol region Building code Academy. Former Education Commmitte Chair"
						/>
						<MemberList
							className="mt-12 pt-12 border-t border-[#333] sm:flex-row sm:gap-10"
							imageStyle="w-40"
							src={griggs}
							alt="David Griggs Avatar"
							name="David Griggs"
							position="Engineering Former Bylaws and Membership Committe  Chair"
						></MemberList>
					</ul>
				</div>
			</section>
		</main>
	)
}

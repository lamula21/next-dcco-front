import president from '@/public/president.jpg'
import nisson from '@/public/marie-nisson.jpg'
import meng from '@/public/rock-meng.png'
import mitchell from '@/public/kim-mitchel.jpg'
import delgado from '@/public/ashley.jpg'

import { MemberList } from '../components/MemberList'
import { MemberHeader } from '../components/MemberHeader'
import IconLink from '@/components/IconLink'

export default function BoardMembersPage() {
	return (
		<main className="bg-[#222] py-32 w-full">
			{/* Members */}
			<section className="container">
				<MemberHeader
					title="Meet our leadership"
					description={`
						We're a dynamic group of professionals who are passionate about what we do and dedicated to delivering the best results for our clients.
					`}
					textStyle="text-[#C07331]"
				/>

				<ul className="mx-auto mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:max-w-2xl lg:gap-x-8 lg:max-w-4xl xl:max-w-none">
					<MemberList
						className="xl:flex-row"
						src={president}
						alt="The president of DCCOA"
						name="President"
						position="President of DCCOA"
						email="president@dccodeofficials.com"
					/>
					<MemberList
						className="border-t border-[#333] sm:border-none xl:flex-row"
						src={nisson}
						alt="The Secretary of DCCOA"
						name="Marie Nisson"
						position="Secretary"
						email="info@dccodeofficials.com"
					/>
					<MemberList
						className="border-t border-[#333] sm:border-none xl:flex-row"
						src={meng}
						alt="The Treasurer of DCCOA"
						name="Rock Meng"
						position="Treasurer"
						email="treasurer@dccodeofficials.com"
						description="Rock Meng is a registered fire protection engineer, ICC certified Fire Inspector, and DC approved 3rd party inspector. Currently, Rock is the treasurer of D.C. Code Officials Assocciation (DCCOA), a local chapter of the International Code Council (ICC) in Washington, D.C. He Serves on the executive committee of ICC Global Membership."
					/>
					<MemberList
						className="border-t border-[#333] sm:border-none xl:flex-row"
						src={mitchell}
						alt="The Committee Chair of DCCOA"
						name="Kim Mitchel"
						position="Bylaws, Social Media and Outreach committee Chair"
						email="bylaws@dccodeofficials.com"
						description={`Kim Mitchell is a Permit technician Consultant working with D.C. Government agencies. She is the founder of the District Expeditors Association and the current chair of DCCOA's Bylaws Chair and Marketing Committee as well as a current ICC Member.`}
					>
						<div className="flex items-center">
							<IconLink
								className="flex items-center mt-4 mr-2"
								iconClass="bx bxs-envelope"
								href={`mailto:social_media_and_outreach_committee@dccodeofficials.com`}
							/>
							<span className="text-base text-[#CECAC3] mt-4 break-all">
								social_media_and_outreach_committee@dccodeofficials.com
							</span>
						</div>
					</MemberList>
					<MemberList
						className="border-t border-[#333] sm:border-none xl:flex-row"
						alt="Membership Committe Chair"
						name="Nicole Allen"
						position="Membership Committee Chair"
						email="membership_committee@dccodeofficials.com"
					></MemberList>
					<MemberList
						className="border-t border-[#333] sm:border-none xl:flex-row"
						src={delgado}
						alt="The Education Committee Chair"
						name="Ashley Delgado"
						position="Education Committee Chair"
						email="education_committee@dccodeofficials.com"
						description={`Ashley Delgado is a Certified Building Performance professional with Building Performance Institute (BPI), ICC Residential Energy Inspector/PI, Reviewer, and USGBC LEED Green Associate. A Residential Energy Plans Reviewer for the District of Columbia (D.C)'s municipality government in the Department of Buildings (DOB).`}
					/>
				</ul>
			</section>
		</main>
	)
}

import { Separator } from '@/components/ui/separator'
import membershipImg from '@/public/join-us-1.png'
import sponsorshipImg from '@/public/join-us-2.png'
import Image from 'next/image'
import Link from 'next/link'
export default function JoinUs() {
	return (
		<main className="bg-[#222] h-full sm:h-screen">
			<section className="w-full h-full sm:h-[calc(100vh-20rem)] flex flex-col">
				<div className="flex">
					<div className="relative group w-1/2 overflow-hidden">
						<Image
							src={membershipImg}
							className="h-full object-cover object-center scale-105 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-125"
							alt="cover for memberships"
						/>
						<div className="absolute opacity-0 z-3 inset-0 text-white text-xl flex justify-center items-center bg-black/60 underline transition-all duration-300 h-full w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100">
							<Link
								href="/join-us/membership"
								className="text-xl md:text-3xl hover:text-[#C07331] "
							>
								Membership
							</Link>
						</div>
					</div>

					<div className="relative group w-1/2 overflow-hidden">
						<Image
							src={sponsorshipImg}
							className="h-full object-cover object-center scale-105 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-125"
							alt="cover for sponsors"
						/>
						<div className="absolute opacity-0 z-3 inset-0 text-white text-xl flex justify-center items-center bg-black/60 underline transition-all duration-300 h-full w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100">
							<Link
								href="/join-us/sponsorship"
								className="text-xl md:text-3xl hover:text-[#C07331]"
							>
								Sponsorship
							</Link>
						</div>
					</div>
				</div>

				<div className="container h-full py-24 flex-col sm:flex sm:flex-row justify-between items-center gap-10">
					<h1 className="text-2xl sm:text-7xl whitespace-nowrap">Join Us</h1>

					<Separator
						orientation="vertical"
						className="hidden sm:block bg-[#C07331] w-1"
					/>

					<p className="w-ful text-sm sm:text-base">
						As the leaders in the advancement and innovation in code
						development, building safety and sustsainable construction, our
						diverse community exists to connect and advance our members careers,
						build strong leaders and communities, and develop opportunities to
						learn and engage with fellow building professionals here and
						worldwide. Joining as a member or sponsor of DCCOA means you are
						commited to being a leader in the building safety profession and
						part of an association and organization that is recognized
						nationally and worldwide for their efforts to improve building codes
						for the life, health, and safety of our communities.
					</p>
				</div>
			</section>
		</main>
	)
}

import logo from '@/public/logo-bg-removed.png'
import hero from '@/public/hero.jpg'
import hero2 from '@/public/hero2.jpg'
import hero4 from '@/public/hero4.jpg'
import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'
import { MobileNav } from '@/components/MobileNav'
import { SiteConfig } from '@/app/config/SiteConfig'
import { Contact } from '@/components/Contact'
import { ScrollLottie } from '@/components/ScrollLottie'
import { Newsletter } from '@/components/Newsletter'
import LoginForm from '@/components/LoginForm'

export default async function HomePage() {
	return (
		<main className="bg-[#222]">
			{/* 1. Section Landing */}
			<section
				className="relative h-[calc(100vh-80px)] bg-local md:bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:z-10 before:h-[33%] before:bg-gradient-to-b before:from-transparent before:via-[#0000004d_75%] before:to-[#0000004d_100%]"
				style={{ backgroundImage: `url(${hero.src})` }}
			>
				{/* Logo */}
				<div className="hidden lg:block absolute top-[10%] left-[10%]">
					<Image priority src={logo} width={130} alt="DCCO Association Logo" />
				</div>

				<a
					href="#section-2"
					className="absolute z-20 bottom-10 left-[50%] right-[50%] cursor-pointer text-white"
				>
					<ScrollLottie />
				</a>
			</section>

			<aside className="sticky top-0 flex bg-[#222] h-20 items-center w-full px-8 border-y border-[#333] z-20">
				<Navbar />
				<MobileNav mainNavItems={SiteConfig} />
			</aside>

			{/* 2. Section Hero */}
			<section
				id="section-2"
				className="relative h-[100dvh] bg:local md:bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:h-full before:bg-[rgba(0,0,0,0.67)]"
				style={{
					backgroundImage: `url(${hero2.src})`,
				}}
			>
				<div className="relative h-full flex items-center justify-center m-auto px-4 py-16 max-w-7xl text-white">
					<div className="md:text-center">
						<h1 className="text-4xl mb-4 md:max-w-4xl font-extrabold md:tracking-tight md:text-6xl">
							Welcome to D.C. Code Officials Association
						</h1>

						<div className="flex justify-center my-8">
							<span className="block w-20 h-1 bg-[#C07331]"></span>
						</div>

						<div className="flex justify-center">
							<p className="text-lg md:max-w-3xl font-light mb-8 md:text-xl text-white">
								Our non-profit organization offers in advancements in continuing
								education, workshops, and seimnars/webinars to boost careers,
								promote jobs, and develop skills in building design and
								construction in code regulations.
							</p>
						</div>
						<a
							href="#section-3"
							className="inline-flex items-center py-3 px-5 font-medium bg-transparent rounded-md border border-[#C07331] mr-4 cursor-pointer hover:bg-[#C07331]"
						>
							Read More
						</a>
						<Link
							href="/membership"
							className="inline-flex items-center py-3 px-5 font-medium bg-transparent rounded-md border border-[#C07331] ml-4 cursor-pointer hover:bg-[#C07331]"
						>
							Join Us
						</Link>
						<ul className="flex flex-1 flex-col gap-10 sm:flex-row md:gap-0 justify-between pt-20 text-left">
							<li className="flex">
								<span className="text-3xl font-extrabold md:text-5xl ">
									20+
								</span>
								<div className="text-base pl-4 md:text-xl">
									<div>Active</div> <div>Members</div>
								</div>
							</li>

							<li className="border-l-[1px] border-white"></li>

							<li className="flex">
								<span className="text-3xl font-extrabold md:text-5xl ">
									10+
								</span>
								<div className="text-base pl-4 md:text-xl">
									<div>Professionals</div> <div>Members</div>
								</div>
							</li>

							<li className="border-l-[1px] border-white"></li>

							<li className="flex">
								<span className="text-3xl font-extrabold md:text-5xl ">
									20+
								</span>
								<div className="text-base pl-4 md:text-xl">
									<div>Yearly</div> <div>Events</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* 3. Section Content */}
			<section className="h-full md:h-screen px-20 py-32" id="section-3">
				<div className="flex flex-col justify-center items-center h-full max-w-7xl m-auto gap-10">
					<div className="text-center">
						<h2 className="mb-4 font-extrabold tracking-tight text-5xl">
							Explore our Chapter in D.C.
						</h2>
						<Link
							href="/about"
							className="inline-flex items-center text-lg font-medium text-[#C07331] "
						>
							<span className="hover:underline">Learn more about us</span>
							<i className="bx bx-chevron-right text-2xl ml-1" />
						</Link>
					</div>

					<div className="flex flex-wrap w-full">
						<div className="flex flex-col w-full md:w-1/3 p-4 gap-4 shrink-0">
							<Link
								className="relative group overflow-hidden rounded-lg"
								href="/courses"
							>
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png"
									className="w-full object-cover object-center group-hover:opacity-50 transition duration-300 ease-in-out group-hover:scale-110"
								/>
								<p className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] underline decoration-2">
									See more
								</p>
							</Link>

							<h3 className="text-xl font-bold">Discover our new Ecourses.</h3>
							<p className="text-[#D6D3CD]">
								Gain valuable knowledge and skills from our newly introduced
								online courses. Start your learning journey today!
							</p>
						</div>

						<div className="flex flex-col w-full md:w-1/3 p-4 gap-4 shrink-0">
							<Link
								className="relative group overflow-hidden rounded-lg"
								href="/calendar"
							>
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png"
									className="w-full object-cover object-center group-hover:opacity-50 transition duration-300 ease-in-out group-hover:scale-110"
								/>
								<p className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] underline decoration-2">
									See more
								</p>
							</Link>

							<h3 className="text-xl font-bold">
								Take a look at our renew calendar.
							</h3>
							<p className="text-[#D6D3CD]">
								Stay informed and plan ahead with our renewed calendar!
							</p>
						</div>

						<div className="flex flex-col w-full md:w-1/3 p-4 gap-4 shrink-0">
							<Link
								className="relative group overflow-hidden rounded-lg"
								href="/"
							>
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png"
									className="w-full object-cover object-center group-hover:opacity-50 transition duration-300 ease-in-out group-hover:scale-110"
								/>
								<p className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] underline decoration-2">
									See more
								</p>
							</Link>

							<h3 className="text-xl font-bold">Become an important member.</h3>
							<p className="text-[#D6D3CD]">
								Your participation and contributions are highly appreciated!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 4. Section Newsletter */}
			<section
				className="flex justify-center items-center relative h-screen bg-local md:bg-fixed bg-cover bg-center before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:h-full before:bg-[rgba(0,0,0,0.67)]"
				style={{ backgroundImage: `url(${hero4.src})` }}
			>
				<Newsletter />
			</section>

			{/* 5. Section Log In */}
			<section className="h-screen container">
				<div className="flex items-center justify-center h-full">
					<LoginForm />
				</div>
			</section>

			{/* 6. Section Contact */}
			<Contact />
		</main>
	)
}

import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/public/hero.jpg'

export default function AuthLayout({ children }) {
	return (
		<div className="bg-black grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
			{/* Left side */}
			<div className="relative w-full bg-gradient-to-t from-background to-background/60 md:to-background/40">
				<Image
					src={Hero}
					alt="A main hero image"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					fill
					className="hidden md:block absolute inset-0 object-cover"
				/>

				<div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />

				<Link
					href="/"
					className="absolute left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
				>
					{/* <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" /> */}
					<span>D.C. Code Officials Association</span>
				</Link>
			</div>

			{/* Right side */}
			<main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1 md:bg-gradient-to-t md:from-background md:to-background/40">
				{children}
			</main>
		</div>
	)
}

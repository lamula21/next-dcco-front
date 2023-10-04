import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/public/logo-white.jpg'
import { ThemeToggle } from './ThemeToggle'

export function FooterDashboard({ className }) {
	return (
		<footer className={cn(className)}>
			<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-sm leading-loose md:text-left">
						Built with ❤️ by{' '}
						<a
							href="https://github.com/lamula21"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							Jose Valdivia,
						</a>{' '}
						<a
							href="https://github.com/IsmaelPSY"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							Ismael Sanchez,
						</a>{' '}
						<a
							href="https://github.com/ktran123"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							Henry Tran,
						</a>{' '}
						<a
							href="/"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							Yosilaass
						</a>{' '}
						. Hosted on{' '}
						<a
							href="https://vercel.com"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							Vercel
						</a>
						. The source code is available on{' '}
						<a
							href="https://github.com/lamula21/next-dcco-front"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							GitHub
						</a>
						.
					</p>
				</div>

				<ThemeToggle />
			</div>
		</footer>
	)
}

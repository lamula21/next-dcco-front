'use client'
import { Check, Loader2 } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function CardEcommerceFeature({ id, title, description, image, price }) {
	const [loading, setloading] = useState(false)

	return (
		<Card className="group relative bg-[#181a1b] rounded-xl w-full h-full flex flex-col md:flex-row ">
			<CardHeader className="md:h-full rounded-xl md:w-2/3 overflow-hidden group-hover:opacity-75 transition-opacity">
				<Link href={`/shop/${id}`}>
					<img
						src={image}
						alt={`A description of this item: ${title}`}
						className="w-full h-full rounded-xl object-cover object-center"
					/>
				</Link>
			</CardHeader>

			<div className="flex flex-col md:w-1/3 justify-between md:py-6">
				<CardContent className="mt-4 flex justify-between">
					<div className="w-full flex flex-col md:gap-5">
						<div className="flex flex-row md:flex-col lg:flex-row w-full justify-between gap-2">
							<h3 className="text-sm sm:text-xl text-white xl:text-3xl md:font-bold">
								<Link href={`/shop/${id}`} className="hover:underline">
									{title}
								</Link>
							</h3>

							<h3 className="text-sm sm:text-xl text-white xl:text-3xl md:font-bold">
								${price}
							</h3>
						</div>

						<p className="mt-1 text-sm sm:text-lg leading-normal text-white/50 xl:text-xl">
							{description}
						</p>
					</div>
				</CardContent>

				<CardFooter>
					<a
						href="#"
						type="button"
						className={cn(
							'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer',
							loading && 'opacity-50 pointer-events-none'
						)}
						onClick={() => setloading(true)}
					>
						{loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
						{!loading && <Check className="mr-2 h-4 w-4" />}
						Checkout
					</a>
				</CardFooter>
			</div>
		</Card>
	)
}

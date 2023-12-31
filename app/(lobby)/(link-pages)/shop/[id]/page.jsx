import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'

import { BreadcrumIcon } from '@/components/icons/svg-icons'
import { getProductById } from '@/services/getProductById'
import SectionHeader from '@/components/SectionHeader'
import { CheckoutButton } from '@/components/CheckoutButton'

export default async function ProductPage({ params: { id } }) {
	const product = await getProductById(id)

	return (
		<main className="bg-[#222] container py-24 flex flex-col">
			<SectionHeader subtitle="THE SHOP" title={product.category} />

			<section className="w-full bg-[#181a1b] border border-white/5 rounded-lg">
				<div className="py-10 px-4 max-w-[42rem] m-auto sm:py-24 sm:px-6 lg:p-10 lg:gap-x-8 lg:grid lg:grid-cols-[repeat(2,minmax(0,1fr))] lg:max-w-[80rem] ">
					<div className="lg:self-end lg:max-w-[32rem]">
						<nav className="">
							<div className="text-sm flex items-center gap-2">
								<Link
									href="/shop"
									className="text-indigo-500/90 hover:underline"
								>
									<span className="t">Products</span>
								</Link>

								<BreadcrumIcon className="w-4 h-4 text-white/30" />

								<p className="text-indigo-500/90">{product.category}</p>
							</div>
						</nav>

						<div className="mt-4">
							<h1 className="text-3xl text-white font-bold tracking-tight sm:text-4xl">
								{product.title}
							</h1>
						</div>
						<section aria-labelledby="information-heading" className="lh">
							<p className="text-lg text-white sm:text-xl mt-4">
								${product.price}
							</p>
							<div className="mt-4">
								<p className="text-base text-white/70">{product.description}</p>
							</div>
							<div className="mt-6 flex items-center mb-4">
								<BadgeCheck className="text-white" />
								<p className="ml-2 text-sm text-white/70">
									In stock and ready to ship
								</p>
							</div>
						</section>
					</div>

					<div className="lg:self-end lg:mt-0 lg:row-span-2 lg:col-start-2">
						<div className="aspect-square relative overflow-hidden rounded-md flex items-center justify-center">
							<img
								src={product.imageUrl[0]}
								alt="Model wearing light green backpack with black canvas straps and front zipper pouch."
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</div>

					<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
						<div className="flex gap-5">
							<div className="flex flex-col">
								<span className="text-sm font-medium text-white/60">Size</span>
								<div className="">
									<p className="text-lg font-bold">{product.size}</p>
								</div>
							</div>

							<div className="flex flex-col">
								<span className="text-sm font-medium text-white/60">
									Colors
								</span>
								<div className="h-full w-full flex items-center">
									<div
										className="w-5 h-5 rounded-full"
										style={{
											backgroundColor: product.color,
										}}
									></div>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<CheckoutButton price={product.price} />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

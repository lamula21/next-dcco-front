import { getProducts } from '@/services/getProducts'
import SectionHeader from '../components/SectionHeader'
import { CardEcommerceFeature } from './CardEcommerceFeature'
import { CardEcommerce } from './CardEcommerce'

export default async function ShopPage() {
	const products = await getProducts()

	return (
		<main className="container">
			<section className="w-full px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<SectionHeader
					subtitle="THE SHOP"
					title="Featured Products"
					description=""
				/>

				{products && (
					<>
						<CardEcommerceFeature
							key={products[0]._id}
							id={products[0]._id}
							title={products[0].title}
							description={products[0].description}
							image={products[0].imageUrl[0]}
							price={products[0].price}
						/>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							{products.map((product, index) => {
								if (index === 0) return null
								return (
									<CardEcommerce
										key={product._id}
										id={product._id}
										title={product.title}
										description={product.description}
										image={product.imageUrl[0]}
										price={product.price}
									/>
								)
							})}
						</div>
					</>
				)}

				{!products && (
					<h1 className="text-4xl font-bold text-center">
						There is no products to show...
					</h1>
				)}
			</section>
		</main>
	)
}

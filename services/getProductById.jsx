export async function getProductById(id) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await fetchProduction(id)
		} else {
			return await fetchDevelopment(id)
		}
	} catch (error) {
		return { error: error.message }
	}
}

const fetchProduction = async (id) => {
	const res = await fetch(
		`https://dccoadmin.vercel.app/api/products?id=${id}`,
		{
			cache: 'no-cache',
		}
	)
	const data = await res.json()
	return data
}

const fetchDevelopment = async (id) => {
	const res = await fetch(`http://localhost:3000/api/products?id=${id}`)
	const data = await res.json()
	return data
}

export async function getProducts() {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await fetchProduction()
		} else {
			return await fetchDevelopment()
		}
	} catch (error) {
		return { error: error.message }
	}
}

const fetchProduction = async () => {
	const res = await fetch(`https://dccoadmin.vercel.app/api/products`, {
		cache: 'no-cache',
	})
	const data = await res.json()
	return data
}

const fetchDevelopment = async () => {
	const res = await fetch(`http://localhost:3000/api/products`)
	const data = await res.json()
	return data
}

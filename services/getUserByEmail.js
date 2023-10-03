export async function getUserByEmail(email) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await fetchProduction(email)
		} else {
			return await fetchDevelopment(email)
		}
	} catch (error) {
		return { error: error.message }
	}
}

const fetchProduction = async (email) => {
	const res = await fetch(
		`https://dccoadmin.vercel.app/api/users?email=${email}`,
		{
			cache: 'no-cache',
		}
	)
	const data = await res.json()
	return data
}

const fetchDevelopment = async (email) => {
	const res = await fetch(`http://localhost:3000/api/users?email=${email}`)
	const data = await res.json()
	return data
}

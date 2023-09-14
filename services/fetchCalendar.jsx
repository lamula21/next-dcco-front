export async function fetchCalendar() {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await fetchProductionData()
		} else {
			return await fetchDevelopmentData()
		}
	} catch (error) {
		return { error: error.message }
	}
}

const fetchProductionData = async () => {
	const res = await fetch('https://dccoadmin.vercel.app/api/events', {
		cache: 'no-cache',
	})
	const data = await res.json()
	return data
}

const fetchDevelopmentData = async () => {
	const res = await fetch('http://localhost:3000/api/events', {
		cache: 'no-cache',
	})
	const data = await res.json()
	return data
}

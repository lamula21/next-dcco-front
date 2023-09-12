export async function fetchCalendar() {
	try {
		const res = await fetch('http://localhost:3000/api/events', {
			cache: 'no-cache',
		})
		const data = await res.json()
		return data
	} catch (error) {
		return { error: error.message }
	}
}

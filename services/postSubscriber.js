export async function postNewSubscriber(subscriber) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await postProductionData(subscriber)
		} else {
			return await postDevelopmentData(subscriber)
		}
	} catch (error) {
		return { error: error.message }
	}
}

const postProductionData = async (subscriber) => {
	const res = await fetch('https://dccoadmin.vercel.app/api/subscribed_users', {
		cache: 'no-cache',
		method: 'POST',
		body: JSON.stringify(subscriber),
	})
	const data = await res.json()
	return data
}

const postDevelopmentData = async (subscriber) => {
	const res = await fetch('http://localhost:3000/api/subscribed_users', {
		method: 'POST',
		body: JSON.stringify(subscriber),
	})
	const data = await res.json()
	return data
}

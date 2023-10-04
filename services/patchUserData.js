export async function patchUserData(dataToUpdate) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return await patchProductionUserData(dataToUpdate)
		} else {
			return await patchDevelopmentUserData(dataToUpdate)
		}
	} catch (error) {
		return { error: error.message }
	}
}

const patchProductionUserData = async (dataToUpdate) => {
	try {
		const res = await fetch('https://dccoadmin.vercel.app/api/users', {
			method: 'PATCH',
			body: JSON.stringify(dataToUpdate),
		})
		return res
	} catch (error) {
		throw new Error(error.message)
	}
}

const patchDevelopmentUserData = async (dataToUpdate) => {
	try {
		const res = await fetch('http://localhost:3000/api/users', {
			method: 'PATCH',
			body: JSON.stringify(dataToUpdate),
		})
		return res
	} catch (error) {
		throw new Error(error)
	}
}

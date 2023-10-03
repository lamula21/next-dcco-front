export function getAPIBasePath() {
	// development
	let basePath = 'http://localhost:3000'

	if (process.env.NODE_ENV === 'production') {
		basePath = 'https://dccoadmin.vercel.app'
	}

	return basePath
}

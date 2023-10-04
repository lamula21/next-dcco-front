import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
	const forcedTheme = Component.theme || null

	return (
		<ThemeProvider forcedTheme={forcedTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp

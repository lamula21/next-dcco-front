'use client'

import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }) {
	return (
		<NextThemesProvider
			themes={['light', 'dark', 'dashboard']}
			attribute="class"
			defaultTheme="dark"
			enableSystem={false}
		>
			<SessionProvider>
				<NextUIProvider>{children}</NextUIProvider>
			</SessionProvider>
		</NextThemesProvider>
	)
}

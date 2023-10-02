import { Footer } from '@/components/Footer'
import React from 'react'

export default function LobbyLayout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	)
}

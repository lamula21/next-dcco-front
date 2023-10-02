'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export default function TemporalLogoutButotn() {
	return <Button onClick={() => signOut()}>LOGOUT</Button>
}

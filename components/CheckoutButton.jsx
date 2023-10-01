'use client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { CreditIcon } from '@/components/icons/svg-icons'
import { cn } from '@/lib/utils'

export function CheckoutButton({ price }) {
	const [loading, setLoading] = useState(false)
	return (
		<a
			href="#"
			className={cn(
				'flex w-full items-center justify-center rounded-md border border-white/0 bg-white py-3 text-base font-medium text-black hover:bg-white/90',
				loading && 'opacity-50 pointer-events-none'
			)}
			onClick={() => setLoading(true)}
		>
			{loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
			{!loading && <CreditIcon className="w-5 h-5 mr-2" />}
			Pay ${price}
		</a>
	)
}

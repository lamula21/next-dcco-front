'use client'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GemIcon, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false)

	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
		if (theme !== 'dashboard') {
			setTheme('dashboard')
		}
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="h-8 w-8 px-0">
					{theme === 'dashboard' ? (
						<GemIcon className="h-4 w-4" />
					) : theme === 'light' ? (
						<Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					) : (
						<Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					)}

					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('dashboard')}>
					<GemIcon className="mr-2 h-4 w-4" />
					<span>Prime</span>
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => setTheme('light')} disabled>
					<Sun className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')} disabled>
					<Moon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

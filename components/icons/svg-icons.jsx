export function TimeIcon({ className }) {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24">
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
			<path d="M13 7h-2v6h6v-2h-4z"></path>
		</svg>
	)
}

export function IconEye({ className, width, height }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
			<path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
		</svg>
	)
}

export function BreadcrumIcon({ className }) {
	return (
		<svg className={className} viewBox="0 0 20 20" fill="currentColor">
			<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
		</svg>
	)
}

export function CreditIcon({ className }) {
	return (
		<svg
			className={className}
			width={24}
			height={24}
			viewBox="0 0 24 24"
			stroke-width={2}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
			<path d="M3 10l18 0"></path>
			<path d="M7 15l.01 0"></path>
			<path d="M11 15l2 0"></path>
		</svg>
	)
}

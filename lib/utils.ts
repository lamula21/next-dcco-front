import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getDifferenceTime(init_time: string, end_time: string) {
	// get difference time of event init_time (e.g 10:00) and end_time (e.g 11:30) in minutes
	const init = init_time.split(':')
	const end = end_time.split(':')
	const init_minutes = parseInt(init[0]) * 60 + parseInt(init[1])
	const end_minutes = parseInt(end[0]) * 60 + parseInt(end[1])
	return end_minutes - init_minutes
}

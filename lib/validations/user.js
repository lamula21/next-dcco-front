import * as z from 'zod'

export const userNameSchema = z.object({
	name: z.string().min(3).max(32),
})

export const passwordSchema = z.object({
	password: z
		.string()
		.min(3, {
			message: 'Password must be at least 8 characters long',
		})
		.max(50)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
			message:
				'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
		}),
})

export const titleSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'Your title must be at least 3 characters long' })
		.max(32, { message: 'Your title must be at most 32 characters long' }),
})

export const entitySchema = z.object({
	gov_org_firm: z
		.string()
		.min(3, { message: 'This field must be at least 3 characters long' })
		.max(32, { message: 'This field must be at most 32 characters long' }),
})

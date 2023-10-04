import * as z from 'zod'

export const creditCardSchema = z.object({
	creditcardholder: z.string().min(3, {
		message: 'Name must be at least 3 characters long',
	}),

	creditcardnumber: z
		.number()
		.min(16, {
			message: 'Password must be at least 8 characters long',
		})
		.max(16),

	creditcardyear: z
		.string()
		.min(5)
		.max(5)
		.regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),

	creditcardcvc: z.number().min(3).max(3),
})

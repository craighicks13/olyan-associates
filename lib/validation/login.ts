import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string({
			required_error: 'Please enter an email address.',
		})
		.email({
			message: 'Please enter a valid email address.',
		}),
	password: z
		.string({
			required_error: 'Please enter your password.',
		})
		.min(5, { message: 'Password too short' }),
});

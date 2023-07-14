import { z } from 'zod';

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-.]?[\s]?[0-9])+$/
);

export const contactFormSchema = z.object({
	name: z
		.string({
			required_error: 'Please enter your name.',
		})
		.min(1, { message: 'Please enter your name.' }),
	email: z
		.string({
			required_error: 'Please enter an email address.',
		})
		.email({
			message: 'Please enter a valid email address.',
		}),
	phone: z
		.string()
		.regex(phoneRegex, 'Please enter a valid phone number.')
		.or(z.literal(''))
		.optional(),
	subject: z.string({ required_error: 'Please select the subject' }),
	message: z
		.string({
			required_error: 'Please enter a message',
		})
		.min(5, { message: 'Message too short' }),
});

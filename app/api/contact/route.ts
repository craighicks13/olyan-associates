import { contactFormSchema } from '@/lib/validation/contact';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Validate the request body
		const validatedData = contactFormSchema.parse(body);

		// Construct email content
		const emailContent = {
			to: 'jolyan@olyan.com',
			from: {
				email: 'jolyan@olyan.com',
				name: 'Olyan & Associates Website Form',
			},
			subject: `New Contact Form Submission: ${validatedData.subject}`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${
					validatedData.phone || 'Not provided'
				}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
		};

		// Send the email
		await sgMail.send(emailContent);

		return NextResponse.json(
			{ message: 'Email sent successfully', status: '200' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ message: 'Failed to send email', status: '500' },
			{ status: 500 }
		);
	}
}

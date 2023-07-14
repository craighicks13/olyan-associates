'use client';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { contactFormSchema } from '@/lib/validation/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface SubmitData extends z.infer<typeof contactFormSchema> {
	gRecaptchaToken: string;
}

export default function ContactForm() {
	const { toast } = useToast();
	const [isPending, startTransition] = useTransition();
	const { executeRecaptcha } = useGoogleReCaptcha();
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		},
	});

	const onSubmit = async (
		data: z.infer<typeof contactFormSchema>
	) => {
		if (!executeRecaptcha) {
			toast({
				title: 'Error',
				description: 'reCaptcha not yet available',
				variant: 'destructive',
			});
			return;
		}

		const gReCaptchaToken = await executeRecaptcha(
			'enquiryFormSubmit'
		);
		const { message, status } = await submitEnquiryForm({
			...data,
			gRecaptchaToken: gReCaptchaToken,
		});

		if (status == '200') {
			toast({
				title: 'Success',
				description: message,
				variant: 'success',
			});
			resetForm();
		} else {
			toast({
				title: 'Error',
				description: message,
				variant: 'destructive',
			});
		}
	};

	const submitEnquiryForm = async (data: SubmitData) => {
		const res = await fetch('/contact/send', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		return await res.json();
	};

	const resetForm = () => {
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={(e) =>
					startTransition(() => form.handleSubmit(onSubmit)(e))
				}
				name="contact-form"
				id="contact-form"
				className="w-full space-y-8 py-10"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="name">
								<Icons.asterisk className="mr-1 inline-block w-3 text-destructive" />
								Name
							</FormLabel>
							<FormControl>
								<Input placeholder="Full Name" {...field} />
							</FormControl>
							<FormMessage className="rounded bg-destructive/90 p-3 text-destructive-foreground" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="email">
								<Icons.asterisk className="mr-1 inline-block w-3 text-destructive" />
								Email
							</FormLabel>
							<FormControl>
								<Input placeholder="you@email.com" {...field} />
							</FormControl>
							<FormMessage className="rounded bg-destructive/90 p-3 text-destructive-foreground" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="phone">Phone</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="subject">
								<Icons.asterisk className="mr-1 inline-block w-3 text-destructive" />
								Subject
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="text-muted-forground">
										<SelectValue placeholder="Select a subject" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="General Inquiry" defaultChecked>
										General Inquiry
									</SelectItem>
									<SelectItem value="Kudos">New Client</SelectItem>
									<SelectItem value="Website">
										Accounting Question
									</SelectItem>
									<SelectItem value="Complaint">Issue</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage className="rounded bg-destructive/90 p-3 text-destructive-foreground" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="message">
								<Icons.asterisk className="mr-1 inline-block w-3 text-destructive" />
								Message
							</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage className="rounded bg-destructive/90 p-3 text-destructive-foreground" />
						</FormItem>
					)}
				/>
				<div className="mt-10 flex w-full justify-end gap-10">
					{isPending ? (
						<Button size="lg" variant="secondary" disabled>
							<Icons.loader className="mr-2 inline-block w-5 animate-spin" />
							Sending...
						</Button>
					) : (
						<div className="flex w-full justify-between">
							<Button
								size="lg"
								variant="secondary"
								onClick={() => resetForm()}
								type="reset"
							>
								Clear Form
							</Button>

							<Button size="lg">Send</Button>
						</div>
					)}
				</div>
			</form>
		</Form>
	);
}

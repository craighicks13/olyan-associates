'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/lib/validation/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from './ui/use-toast';
export function SignInForm() {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSignIn = async (values: z.infer<typeof loginSchema>) => {
		toast({
			title: 'Error Signing In',
			description: `Error: This feature isn't implemented yet.`,
			className: 'bg-red-800 text-red-100',
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => form.handleSubmit(onSignIn)(e)}
				className="mt-10 grid grid-cols-1 gap-y-8"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="password"
									placeholder="Password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button
						type="submit"
						variant="default"
						color="blue"
						className="w-full"
					>
						<span>
							Sign in <span aria-hidden="true">&rarr;</span>
						</span>
					</Button>
				</div>
			</form>
		</Form>
	);
}

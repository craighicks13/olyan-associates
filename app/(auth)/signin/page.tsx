import { Logo } from '@/components/Logo';
import { SignInForm } from '@/components/SignInForm';
import Image from 'next/image';
import Link from 'next/link';
import backgroundImage from '@/images/background-features.jpg';
import { PageIntro } from '@/components/PageIntro';

export default function Login() {
	return (
		<>
			<div className="flex min-h-full flex-1">
				<div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<Logo className="h-20 w-auto" />
						<PageIntro
							eyebrow="Sign in"
							title="Access your account info"
						>
							<SignInForm />
						</PageIntro>
					</div>
				</div>
				<div className="relative hidden w-0 flex-1 lg:block">
					<Image
						className="absolute inset-0 h-full w-full object-cover"
						src={backgroundImage}
						alt=""
						unoptimized
					/>
				</div>
			</div>
		</>
	);
}

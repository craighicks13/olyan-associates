import { Border } from '@/components/Border';
import ContactForm from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Office } from '@/components/Office';
import { PageIntro } from '@/components/PageIntro';
import Link from 'next/link';

function ContactDetails() {
	return (
		<FadeIn>
			<h2 className="font-display text-base font-semibold text-neutral-950">
				Our offices
			</h2>
			<p className="mt-6 text-base text-neutral-600">
				{`We serve Edmonton, St. Albert, and surrounding area's, but
				certainly have clients throughout Alberta!`}
			</p>
			<div className="mt-5">
				<Office />
			</div>

			<Border className="mt-16 pt-16" />
			<h2 className="font-display text-base font-semibold text-neutral-950">
				Email us
			</h2>
			<dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
				{[
					['New Client', 'jay@olyan.com'],
					['General', 'office@olyan.com'],
				].map(([label, email]) => (
					<div key={email}>
						<dt className="font-semibold text-neutral-950">
							{label}
						</dt>
						<dd>
							<Link
								href={`mailto:${email}`}
								className="text-neutral-600 hover:text-neutral-950"
							>
								{email}
							</Link>
						</dd>
					</div>
				))}
			</dl>
		</FadeIn>
	);
}

export default function ContactPage() {
	return (
		<>
			<PageIntro eyebrow="Contact us" title="Let’s work together">
				<p>We can’t wait to hear from you.</p>
			</PageIntro>
			<Container className="my-24 sm:mt-32 lg:mt-40">
				<div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
					<ContactDetails />
					<ContactForm />
				</div>
			</Container>
		</>
	);
}

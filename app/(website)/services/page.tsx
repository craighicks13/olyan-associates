import { Border } from '@/components/Border';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { ServicesProvided } from '@/components/ServicesProvided';
import { Button } from '@/components/ui/button';

const links = [
	[
		'Payroll Calculator',
		'https://apps.cra-arc.gc.ca/ebci/rhpd/startLanguage.do?lang=English',
	],
	['Exchange Rates', 'http://www.x-rates.com/'],
	['CRA Website', 'http://www.cra-arc.gc.ca/menu-eng.html'],
];

function UsefulLinks() {
	return (
		<Container className="my-24 sm:mt-32 lg:mt-40">
			<FadeIn>
				<h2 className="font-display text-2xl font-semibold text-neutral-950">
					Useful Links
				</h2>
			</FadeIn>
			<FadeInStagger className="mt-10" faster>
				<Border as={FadeIn} />
				<ul
					role="list"
					className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
				>
					{links.map(([name, href], index) => (
						<li key={index} className="group">
							<FadeIn className="overflow-hidden">
								<Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px" />
								<Button variant={'default'}>
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										{name}
									</a>
								</Button>
							</FadeIn>
						</li>
					))}
				</ul>
			</FadeInStagger>
		</Container>
	);
}

export default async function Services() {
	return (
		<>
			<PageIntro
				eyebrow="Client Services"
				title="Providing services to help you build your business."
			>
				<p>
					In addition to advice and planning, we offer almost all
					accounting service, specializing in small business and
					personal income tax
				</p>
			</PageIntro>
			<ServicesProvided />
			<UsefulLinks />
		</>
	);
}

import Image from 'next/image';

import { Border } from '@/components/Border';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import imageJackOlyan from '@/images/team/jack-olyan.jpeg';
import imageHaroldMarionOlyan from '@/images/team/harold-marion-olyan.jpeg';
import imageLenCrotty from '@/images/team/len-crotty.jpeg';
import imageJayOlyan from '@/images/team/jay-olyan.jpeg';
import imageDebbieGranger from '@/images/team/debbie-granger.jpeg';
import imageKaylaOlyan from '@/images/team/kayla-olyan.jpeg';
import imageGenericImage from '@/images/team/generic-image.jpeg';

const team = [
	{
		title: 'CPAs',
		people: [
			{
				name: 'Jack Olyan',
				role: 'B.Comm, CGA',
				image: { src: imageJackOlyan },
			},
			{
				name: 'Harold and Marian Olyan',
				role: 'CPA, CGA',
				image: { src: imageHaroldMarionOlyan },
			},
			{
				name: 'Jason Olyan',
				role: 'CPA, CGA',
				image: { src: imageJayOlyan },
			},
			{
				name: 'Len T Crotty',
				role: 'CPA, CGA',
				image: { src: imageLenCrotty },
			},
			{
				name: 'Andrea Medeiros',
				role: 'CPA, CGA',
				image: { src: imageGenericImage },
			},
		],
	},
];

function Team() {
	return (
		<Container className="my-24 sm:mt-32 lg:mt-40">
			<div className="space-y-24">
				{team.map((group) => (
					<FadeInStagger key={group.title}>
						<Border as={FadeIn} />
						<div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
							<FadeIn>
								<h2 className="font-display text-2xl font-semibold text-neutral-950">
									{group.title}
								</h2>
							</FadeIn>
							<div className="lg:col-span-3">
								<ul
									role="list"
									className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
								>
									{group.people.map((person) => (
										<li key={person.name}>
											<FadeIn>
												<div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
													<Image
														alt=""
														{...person.image}
														className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
													/>
													<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
														<p className="font-display text-base/6 font-semibold tracking-wide text-white">
															{person.name}
														</p>
														<p className="mt-2 text-sm text-white">
															{person.role}
														</p>
													</div>
												</div>
											</FadeIn>
										</li>
									))}
								</ul>
							</div>
						</div>
					</FadeInStagger>
				))}
			</div>
		</Container>
	);
}

export const metadata = {
	title: 'About Us',
	description:
		'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default async function About() {
	return (
		<>
			<PageIntro
				eyebrow="About us"
				title="Our strength is collaboration"
			>
				<p>
					We believe that our strength lies in our collaborative
					approach, which puts our clients at the center of everything
					we do.
				</p>
				<div className="mt-10 max-w-2xl space-y-6 text-base">
					<p>
						Studio was started by three friends who noticed that
						developer studios were charging clients double what an
						in-house team would cost. Since the beginning, we have
						been committed to doing things differently by charging
						triple instead.
					</p>
					<p>
						At Studio, we’re more than just colleagues — we’re a
						family. This means we pay very little and expect people to
						work late. We want our employees to bring their whole
						selves to work. In return, we just ask that they keep
						themselves there until at least 6:30pm.
					</p>
				</div>
			</PageIntro>

			<Team />
		</>
	);
}

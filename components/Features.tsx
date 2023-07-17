'use client';

import Image from 'next/image';
import { Container } from './Container';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import backgroundImage from '@/images/background-features.jpg';

const features = [
	{
		title: 'People Matter Most',
		description: 'At OCA, relationships are our bottom line.',
		copy: (
			<>
				<p>
					At OCA, relationships are our bottom line. To us, accounting
					goes beyond numbers. Building and maintaining trust is key
					to everything that we do. We act with integrity and truly
					care to develop a hands-on, personalized experience, putting
					our clients on the right path, providing a deep yet big
					picture perspective. We are vigilant at what we do and work
					with you to carefully analyze your numbers so that you can
					focus on reaching your potential, without doubt. We are in
					constant contact with you so that you can rest assured
					knowing your accounting is in good hands, is done well and
					is done right. Your success is our success.
				</p>
				<p>
					At OCA, we are truly invested in you. We take a partnership
					approach and strongly believe it is our duty to protect
					individuals and businesses, and ensure you feel confident to
					carry on with your business matters. We strive to provide
					accounting solutions that are custom to your business. We
					are an aligned partner who takes the time to learn about
					your needs and wants, and provide you with strategic
					consulting advice so that you can feel at ease and focus on
					taking your business and your life to the next level.
				</p>
			</>
		),
	},
	{
		title: 'Smart',
		description:
			"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
		copy: (
			<>
				<p>
					At OCA we are skilled at analyzing your needs and take the
					time to understand all aspects of your life to ensure you
					minimize tax consequences and maximize tax savings. We value
					new ideas, new technology, continuous education, and new
					ways to think about business. We work with you to put you in
					a position to make you successful.
				</p>
				<p>
					We take a holistic yet meticulous, strategic approach to
					accounting and review our clients’ accounting health with
					great depth. This creative approach ensures we account for
					every aspect of your business so that you can live the
					lifestyle you deserve, today and tomorrow.
				</p>
				<p>
					Our team at OCA offers expert guidance. We spend time with
					you upfront, to review your unique situation. We ensure that
					you understand the numbers and leave feeling heard and
					understood. We have been around over 70 years and foster a
					team of skilled experts driven to provide sound advice. Be
					confident that with us, you made the right choice.
				</p>
			</>
		),
	},
	{
		title: 'Ahead of the Curve',
		description:
			"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
		copy: (
			<>
				<p>
					At OCA, we incorporate the latest technology into our
					systems and processes in order to simplify your life –
					providing you with a seamless, intimate experience. Since
					the 1940’s, being forward-thinking has been a part of our
					company’s DNA, instilled in us by our founder. It is part of
					our heritage, lineage and belief system. We understand that
					change is inevitable in all aspects of life, and in the
					world of accounting, we embrace change and are at the
					forefront of this movement. We are pro-active and
					avant-garde, constantly raising the bar in our field.
				</p>
				<p>
					We implement real-time systems that offer you protection.
					The current accounting profession lives 3-6 months in the
					past; at OCA we strive to be only 3-6 days in the past due
					to our ability and foresight to automate accounting work, by
					embracing the latest technological trends in the industry.
				</p>
				<p>
					We are forward-thinking and offer guidance that is just
					right for you and your business so that you have the freedom
					to excel.
				</p>
			</>
		),
	},
];
export function Features() {
	let [tabOrientation, setTabOrientation] = useState('horizontal');

	useEffect(() => {
		let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

		function onMediaQueryChange({ matches }: { matches: boolean }) {
			setTabOrientation(matches ? 'vertical' : 'horizontal');
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener('change', onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener('change', onMediaQueryChange);
		};
	}, []);
	return (
		<section
			id="features"
			aria-label="Features for running your books"
			className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32 my-24"
		>
			<Image
				className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
				src={backgroundImage}
				alt=""
				width={2245}
				height={1636}
				unoptimized
			/>
			<Container className="relative">
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
						Everything you need to run your books.
					</h2>
					<p className="mt-6 text-lg tracking-tight text-blue-100">
						Well everything you need if you aren’t that picky about
						minor details like tax compliance.
					</p>
				</div>
				<Tab.Group
					as="div"
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
					vertical={tabOrientation === 'vertical'}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
								<Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
									{features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={cn(
												'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
												selectedIndex === featureIndex
													? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
													: 'hover:bg-white/10 lg:hover:bg-white/5'
											)}
										>
											<h3>
												<Tab
													className={cn(
														'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
														selectedIndex === featureIndex
															? 'text-blue-600 lg:text-white'
															: 'text-blue-100 hover:text-white lg:text-white'
													)}
												>
													<span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
													{feature.title}
												</Tab>
											</h3>
											<p
												className={cn(
													'mt-2 hidden text-sm lg:block',
													selectedIndex === featureIndex
														? 'text-white'
														: 'text-blue-100 group-hover:text-white'
												)}
											>
												{feature.description}
											</p>
										</div>
									))}
								</Tab.List>
							</div>
							<Tab.Panels className="lg:col-span-7">
								{features.map((feature) => (
									<Tab.Panel key={feature.title} unmount={false}>
										<div className="relative sm:px-6 lg:hidden">
											<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
												{feature.description}
											</p>
										</div>
										<div className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-full">
											<div className="p-10 flex flex-col gap-6">
												{feature.copy}
											</div>
										</div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</>
					)}
				</Tab.Group>
			</Container>
		</section>
	);
}

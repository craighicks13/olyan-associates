'use client';

import Image from 'next/image';
import { Container } from './Container';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import backgroundImage from '@/images/background-features.jpg';

const features = [
	{
		title: 'Small Business',
		description: 'Services to help you run your business.',
		copy: (
			<>
				<ul className="list-disc list-outside space-y-3 ml-6">
					<li>Bookkeeping</li>
					<li>Tax Planing</li>
					<li>Financial Statements</li>
					<li>Review and Compilation Year End Accounting</li>
					<li>GST, Payroll, and Corporate Tax Returns</li>
					<li>Federal and Provincial Tax Returns</li>
					<li>Asset Disposition / Acquisition / Allocation</li>
					<li>Budgeting and Analysis Advice</li>
					<li>Financial Consultation</li>
				</ul>
			</>
		),
	},
	{
		title: 'Accounting Software',
		description:
			"We're experts in Sage 50, Simply Accounting, and Quickbooks.",
		copy: (
			<>
				<ul className="list-disc list-outside space-y-3 ml-6">
					<li>Sage 50, Simply Accounting, and Quickbooks Advisors</li>
					<li>
						Set-Up or Convert from raw data or previous versions
					</li>
					<li>
						Support with entries, maintenance, year end adjustments,
						and more
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Personal Tax Clients',
		description:
			'Let us help you with your personal taxes, and estate planning.',
		copy: (
			<>
				<ul className="list-disc list-outside space-y-3 ml-6">
					<li>Tax Returns</li>
					<li>Planning</li>
					<li>Assesments</li>
					<li>Estate Planning</li>
				</ul>
			</>
		),
	},
	{
		title: 'Networking',
		description:
			'We have a wide range of clients, serving a wide range of industries, looking for a banker or real estate agent, we can connect you with someone we trust.',
		copy: (
			<>
				<div className="grid grid-cols-2">
					<ul className="list-disc list-outside space-y-3 ml-6">
						<li>Bankers</li>
						<li>Real Estate Agents</li>
						<li>Lawyers</li>
						<li>Software Development</li>
						<li>Painters</li>
						<li>Construction</li>
						<li>Restaurants</li>
						<li>Yoga</li>
						<li>Farms</li>
						<li>Welders</li>
					</ul>
					<ul className="list-disc list-outside space-y-3 ml-6">
						<li>{`Home Reno's`}</li>
						<li>Tile and Carpet</li>
						<li>Bakers</li>
						<li>Electricians</li>
						<li>Oilfield Services</li>
						<li>Dentists</li>
						<li>Chiropractors</li>
						<li>Carpet Care</li>
						<li>Landscaping</li>
						<li>Snow Removal</li>
					</ul>
				</div>
			</>
		),
	},
];
export function ServicesProvided() {
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
											<div className="p-10 flex flex-col gap-6 lg:h-[32rem] lg:justify-center">
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

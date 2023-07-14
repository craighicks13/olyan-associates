import { Container } from '@/components/Container';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function ServicesProvidedPage() {
	return (
		<div>
			<Container>
				<div className="mx-auto max-w-2xl md:text-center">
					<h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
						Providing services to help you build your business.
					</h2>

					<p className="mt-4 text-lg tracking-tight text-slate-700">
						In addition to advice and planning, we offer almost all
						accounting service, specializing in small business and
						personal income tax
					</p>
				</div>
				<div className="md:grid md:grid-cols-2 gap-5 mt-10">
					<Card className="bg-slate-700 text-slate-100">
						<CardHeader>
							<CardTitle>Small Business</CardTitle>
						</CardHeader>
						<CardContent>
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
						</CardContent>
					</Card>
					<Card className="bg-slate-700 text-slate-100">
						<CardHeader>
							<CardTitle>Accounting Software</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-outside space-y-3 ml-6">
								<li>
									Sage 50, Simply Accounting, and Quickbooks Advisors
								</li>
								<li>
									Set-Up or Convert from raw data or previous versions
								</li>
								<li>
									Support with entries, maintenance, year end
									adjustments, and more
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card className="bg-slate-700 text-slate-100">
						<CardHeader>
							<CardTitle>Personal Tax Clients</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-outside space-y-3 ml-6">
								<li>Tax Returns</li>
								<li>Planning</li>
								<li>Assesments</li>
								<li>Estate Planning</li>
							</ul>
						</CardContent>
					</Card>

					<Card className="bg-slate-700 text-slate-100">
						<CardHeader>
							<CardTitle>Networking</CardTitle>
							<CardDescription className="text-slate-300">
								We have a wide range of clients, serving a wide range
								of industries, looking for a banker or real estate
								agent, we can connect you with someone we trust.
							</CardDescription>
						</CardHeader>
						<CardContent>
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
						</CardContent>
					</Card>
				</div>
			</Container>
		</div>
	);
}

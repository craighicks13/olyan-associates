import Link from 'next/link';
import { Icons } from './Icons';
import { Button } from './ui/button';

export function Footer() {
	return (
		<footer className="w-full px-6 py-4 bg-white border-t border-gray-200">
			<div className="flex md:flex-row flex-col-reverse items-center justify-between max-w-6xl mx-auto">
				<div className="flex items-center gap-1 text-slate-500">
					<Icons.copyright className="h-4 w-4" />{' '}
					<span className="leading-tight">Olyan and Associates</span>
					<span>{new Date().getFullYear()}</span>
					<Icons.logo className="w-6 h-6" />
				</div>
				<div>
					<div className="text-slate-500 text-sm text-center md:text-right mr-4">
						#20, 20 Circle Drive
						<br /> St. Albert, Alberta
						<br /> T8N 7L4
					</div>
					<Button variant="ghost" className="text-slate-500">
						<Link
							href="tel:780-460-6624"
							className="flex items-center"
						>
							<Icons.phone className="w-4 h-4 mr-2" />
							780-460-6624
						</Link>
					</Button>
				</div>
			</div>
		</footer>
	);
}

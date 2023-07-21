import { Icons } from './Icons';
import { Office } from './Office';

export function Footer() {
	return (
		<footer className="w-full px-6 py-4 bg-white border-t border-gray-200">
			<div className="flex md:flex-row flex-col-reverse items-center justify-between max-w-6xl mx-auto">
				<div className="flex items-center gap-1 text-slate-500 font-secondary text-xl">
					<Icons.copyright className="h-4 w-4" />{' '}
					<span className="leading-tight pt-2">
						Olyan & Associates
					</span>
					<span className="pt-2">{new Date().getFullYear()}</span>
					<Icons.logo className="w-6 h-6" />
				</div>
				<div className="text-center md:text-right">
					<Office />
				</div>
			</div>
		</footer>
	);
}

import { Icons } from './Icons';

export function Footer() {
	return (
		<footer className="w-full px-6 py-4 bg-white border-t border-gray-200">
			<div className="flex items-center justify-between max-w-6xl mx-auto">
				<div className="flex items-center gap-1 text-slate-500">
					<Icons.copyright className="h-4 w-4" />{' '}
					<span className="leading-tight">Olyan and Associates</span>
					<span>{new Date().getFullYear()}</span>
					<Icons.logo className="w-6 h-6" />
				</div>
			</div>
		</footer>
	);
}

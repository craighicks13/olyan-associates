import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './Icons';

export function Office() {
	return (
		<>
			<div className="text-slate-500 text-sm mx-4">
				#20, 20 Circle Drive
				<br /> St. Albert, Alberta
				<br /> T8N 7L4
			</div>
			<Button variant="ghost" className="text-slate-500 mt-2">
				<Link href="tel:780-460-6624" className="flex items-center">
					<Icons.phone className="w-4 h-4 mr-2" />
					780-460-6624
				</Link>
			</Button>
		</>
	);
}

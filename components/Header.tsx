import Link from 'next/link';
import Image from 'next/image';
import SiteNav from './SiteNav';

export function Header() {
	return (
		<header className="w-full px-6 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center justify-between max-w-6xl mx-auto">
				<Link href={`/`}>
					<Image
						src="/logo.png"
						alt="Olyan and Associates"
						width={250}
						height={117}
						className="w-36"
					/>
				</Link>
				<SiteNav />
			</div>
		</header>
	);
}

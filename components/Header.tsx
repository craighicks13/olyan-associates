import Link from 'next/link';
import Image from 'next/image';
import SiteNav from './SiteNav';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Header() {
	return (
		<header className="w-full px-6 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center justify-between max-w-6xl mx-auto">
				<Logo />
				<SiteNav />
			</div>
		</header>
	);
}

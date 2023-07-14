import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function WebsiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>
				<div className="p-10">{children}</div>
			</main>
			<Footer />
		</>
	);
}

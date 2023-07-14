import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function WebsiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
}

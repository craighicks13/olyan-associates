import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Olyan and Associates',
	description: `We are a full service, personal and small business Chartered Professional Accounting firm providing clients with pro-active "Business advice for tomorrow."
Our diversified client list is made up primarily of companies in the construction, services, high technology, manufacturing, and real estate sectors; and we take a proactive approach to helping our firm's clients throughout all phases of their business development.`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`min-h-screen scroll-smooth bg-background font-sans antialiased ${inter.className}`}
			>
				<>{children}</>
			</body>
		</html>
	);
}

import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

const primaryFont = localFont({
	variable: '--primary-font',
	src: 'fonts/Calama_new.ttf',
	display: 'swap',
});

const secondaryFont = localFont({
	variable: '--secondary-font',
	src: 'fonts/DIN_1451_Std.otf',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Olyan & Associates',
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
				className={`min-h-screen scroll-smooth bg-background font-sans antialiased ${primaryFont.variable} ${secondaryFont.variable} ${inter.className}`}
			>
				<>{children}</>
				<Toaster />
			</body>
		</html>
	);
}

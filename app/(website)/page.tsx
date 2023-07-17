import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
		</>
	);
}

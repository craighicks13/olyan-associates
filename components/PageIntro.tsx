import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { cn } from '@/lib/utils';

type Props = {
	eyebrow: string;
	title: string;
	children: React.ReactNode;
	centered?: boolean;
};

export function PageIntro({
	eyebrow,
	title,
	children,
	centered = false,
}: Props) {
	return (
		<Container
			className={cn(
				'mt-24 sm:mt-32 lg:mt-40',
				centered && 'text-center'
			)}
		>
			<FadeIn>
				<h1>
					<span className="block font-secondary text-xl text-neutral-950">
						{eyebrow}
					</span>
					<span className="sr-only"> - </span>
					<span
						className={cn(
							'mt-6 block max-w-5xl font-secondary text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
							centered && 'mx-auto'
						)}
					>
						{title}
					</span>
				</h1>
				<div
					className={cn(
						'mt-6 max-w-3xl text-xl text-neutral-600',
						centered && 'mx-auto'
					)}
				>
					{children}
				</div>
			</FadeIn>
		</Container>
	);
}

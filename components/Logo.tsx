import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function Logo(props: any) {
	return (
		<Link href={`/`}>
			<Image
				src="/logo.png"
				alt="Olyan and Associates"
				width={250}
				height={117}
				className={cn('w-36', props.className)}
			/>
		</Link>
	);
}

import {
	Copyright,
	Menu,
	Asterisk,
	ChevronRight,
	Mail,
	Loader2,
	LucideProps,
} from 'lucide-react';

export const Icons = {
	asterisk: Asterisk,
	chevronRight: ChevronRight,
	copyright: Copyright,
	loader: Loader2,
	mail: Mail,
	menu: Menu,
	logo: ({ ...props }: LucideProps) => (
		<svg
			id="olyan-logo"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 498.81 656.25"
			{...props}
		>
			<path
				fill={props.fill || '#dd0000'}
				d="M104.6,119.4L17.5,375.9l61.3-88.4c53-76.4,111.1-149,174.1-217.4l59-64.1l-192,96
	C112.6,105.6,107.2,111.8,104.6,119.4L104.6,119.4z"
			/>
			<path
				fill={props.fill || '#dd0000'}
				d="M100.8,495.7l71.5-97.8c47.1-64.5,98.6-125.6,154.2-182.9l76.4-78.8l-187.2,90c-11.9,5.7-21.1,15.9-25.7,28.3
	L100.8,495.7L100.8,495.7z"
			/>
			<path
				fill={props.fill || '#dd0000'}
				d="M197.2,652l76.6-246.1c6-19.1,19.6-34.9,37.6-43.6l172.3-82.8l-70.9,79.1c-54.2,60.5-104,124.8-148.8,192.6
	L197.2,652L197.2,652z"
			/>
		</svg>
	),
};

export const siteConfig = {
	name: 'Olyan & Associates',
	description:
		'Full service, personal and small business Chartered Professional Accounting firm providing clients with pro-active "Business advice for tomorrow."',
	url: 'https://olyan.com',
	ogImage: 'https://olyan.com/images/og-image.jpg',
	contacts: {
		to: 'craighicks13@me.com',
		from: 'website@craighicks.com', //'contact@spinsbar.ca',
	},
	links: {
		facebook: 'https://www.facebook.com/madcowmedia/',
		instagram: 'https://www.instagram.com/madcowmedia/',
		twitter: 'https://twitter.com/madcowmedia',
	},
	'site-nav': [
		{
			title: 'The Accountants',
			href: '/accountants',
			description:
				'Learn more about the team at Olyan & Associates and how we can help you and your business.',
			subsections: [
				{
					title: `CPA's`,
					href: '/accountants/cpas',
					description:
						'Learn more about our CPA’s and how they can help you and your business.',
				},
				{
					title: `Staff`,
					href: '/accountants/staff',
					description:
						'Learn more about our staff and how they can help you and your business.',
				},
			],
		},
		{
			title: 'Client Services',
			href: '/services',
			description: 'Learn more about the services we offer.',
			subsections: [
				{
					title: 'Services Provided',
					href: '/services/provided',
					description: 'Learn more about the services we offer.',
				},
				{
					title: 'New Clients',
					href: '/services/new-clients',
					description: 'Learn more about the services we offer.',
				},
				{
					title: 'Useful Links',
					href: '/services/useful-links',
					description: 'Learn more about the services we offer.',
				},
			],
		},
		{
			title: 'Contact Us',
			href: '/contact',
			description: 'Get in touch with us today.',
		},
	],
	'footer-nav': [
		{ name: 'Menu', href: '/menu' },
		{ name: 'Locations', href: '/locations' },
		{ name: 'Events', href: '/events' },
		{ name: 'Contact', href: '/contact' },
		{ name: `Spinner's Club`, href: '/spinners-club' },
		{ name: `Spinner's Edge`, href: '/spinners-edge' },
	],
};

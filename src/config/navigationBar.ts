// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Thuuba Logo',
		text: 'Thuuba Digital'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Solution', link: '/solution' },
		// { name: 'FAQ', link: '/faq' },
		{ name: 'Works', link: '/works' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		// { name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Contact Us', link: 'https://wa.me/6281928828180?text=halo%20Thuuba,%20Saya%20Ingin%20Konsultasi', style: 'primary', size: 'lg' }]
}

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
		{ name: 'Philosophy', link: '/philosophy' },
		{ name: 'Services', link: '/services' },
		{ name: 'Works', link: '/works' },
	],
	navActions: [{ name: "Let's Collaborate", link: "https://wa.me/6282199448180?text=Hello%20Thuuba Digital,%20I%20Want to%20Book a Consulation", style: 'primary', size: 'lg' }]
}

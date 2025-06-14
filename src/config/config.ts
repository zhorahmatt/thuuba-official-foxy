// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData = {
	siteTitle: 'Thuuba Digital | AI-Powered Digital Transformation Consultant',
	siteDescription:
		'Thuuba Digital is an AI-powered software consultancy revolutionizing business growth through cutting-edge technology solutions and intelligent automation',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Thuuba. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	consultationLink: "https://wa.me/6282199448180?text=Hello%20Thuuba Digital,%20I%20Want to%20Book a Consulation",
}

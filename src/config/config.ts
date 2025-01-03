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

export const configData: Config = {
	siteTitle: 'Thuuba. Your Digital Transformation Partner',
	siteDescription:
		'Thuuba is software agency that help your business grow faster than before through technology',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Thuuba. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}

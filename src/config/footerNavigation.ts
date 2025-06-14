// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	jargon: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Thuuba Digital',
		aboutText: 'PT. Thuuba Digital Indonesia',
		jargon: 'Innovate. Transform. Empower.',
		logo: {
			src: '/logo.svg',
			alt: 'Thuuba Digital',
			text: 'Thuuba Digital'
		}
	},
	footerColumns: [
		{
			category: 'About Us',
			subCategories: [
				{
					subCategory: 'Philosophy',
					subCategoryLink: '/philosophy'
				},
				{
					subCategory: 'Services',
					subCategoryLink: '/services'
				},
				{
					subCategory: 'Works',
					subCategoryLink: '/works'
				},
				// {
				// 	subCategory: 'Pricing',
				// 	subCategoryLink: '/pricing'
				// },
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				// {
				// 	subCategory: 'Terms',
				// 	subCategoryLink: '/terms'
				// }
			]
		},
		{
			category: 'Links',
			subCategories: [
				// {
				// 	subCategory: 'About us',
				// 	subCategoryLink: '/'
				// },
				// {
				// 	subCategory: 'News',
				// 	subCategoryLink: '/blog'
				// },
				// {
				// 	subCategory: 'Careers',
				// 	subCategoryLink: '/blog'
				// }
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'hi@thuuba.com',
					subCategoryLink: '/'
				},
				// {
				// 	subCategory: 'Support',
				// 	subCategoryLink: '/contact'
				// },
				// {
				// 	subCategory: 'Join us',
				// 	subCategoryLink: '/contact'
				// }
			]
		}
	],
	subFooter: {
		copywriteText: '© Thuuba Digital 2025.'
	}
}

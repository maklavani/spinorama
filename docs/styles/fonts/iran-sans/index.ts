import localFont from 'next/font/local'

const IranSansFont = localFont({
	src: [
		{ path: './light.woff2', weight: '300', style: 'normal' },
		{ path: './regular.woff2', weight: '400', style: 'normal' },
		{ path: './medium.woff2', weight: '500', style: 'normal' },
		{ path: './bold.woff2', weight: '700', style: 'normal' }
	],
	display: 'swap'
})

export default IranSansFont

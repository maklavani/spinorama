import { dir } from 'i18next'
import { Analytics } from '@vercel/analytics/react'

// Types
import type { Metadata, Viewport } from 'next'
import type { LayoutProps } from '@/types/app/layouts'

// Configurations
import Config from '@/config'
import LocaleConfig from '@/config/locale'
import ThemeConfig from '@/config/theme'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
import ThemeRegistry from '@/components/theme/theme-registry'
import AppCache from '@/components/theme/cache'

export async function generateStaticParams() {
	return LocaleConfig.list.map(lng => ({ lng }))
}

// Metadata
export const generateMetadata = async (): Promise<Metadata> => {
	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation()

	const metadata: Metadata = {
		applicationName: Config.shortName,
		appleWebApp: {
			title: t('common:app.name'),
			statusBarStyle: 'black-translucent',
			startupImage: [
				'/images/icon192.png',
				{
					url: '/images/icon512.png',
					media: '(device-width: 768px) and (device-height: 1024px)'
				}
			]
		},
		referrer: 'origin-when-cross-origin',
		manifest: '/manifest.json',
		title: {
			template: `%s | ${t('common:app.name')}`,
			default: t('common:app.name')
		},
		description: t('common:app.description'),
		metadataBase: new URL('https://acme.com'),
		alternates: { canonical: '/' }
	}

	return metadata
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: ThemeConfig.color
}

const RootLayout = (props: LayoutProps) => {
	// Props
	const { children, params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<html lang={lng} dir={dir(lng)} data-mui-color-scheme="light">
			<body>
				<AppCache dir={dir(lng)}>
					<ThemeRegistry dir={dir(lng)}>{children}</ThemeRegistry>
				</AppCache>

				<Analytics mode={'production'} />
			</body>
		</html>
	)
}

export default RootLayout

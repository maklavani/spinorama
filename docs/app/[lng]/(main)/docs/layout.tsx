import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Box, Toolbar } from '@mui/material'
import hljs from 'highlight.js'

// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/app/layouts'
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'
import ThemeConfig from '@/config/theme'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
const DrawerOrganism = dynamic(() => import('@/components/organisms/list'))

// Metadata
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: t('links:docs') }

	return metadata
}

const MainLayout = (props: LayoutProps) => {
	// Props
	const { children } = props

	return (
		<>
			<DrawerOrganism />

			<Box component="main" flexGrow={1} maxWidth={`calc(100% - ${ThemeConfig.listWidth}px)`} px={3}>
				<Toolbar />
				{children}
			</Box>
		</>
	)
}

export default MainLayout

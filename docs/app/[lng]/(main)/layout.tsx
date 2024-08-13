import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/app/layouts'
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
const AppbarOrganism = dynamic(() => import('@/components/organisms/appbar'))

// Metadata
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: t('links:home') }

	return metadata
}

const MainLayout = (props: LayoutProps) => {
	// Props
	const { children, params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Box display="flex">
			<AppbarOrganism lng={lng} />
			{children}
		</Box>
	)
}

export default MainLayout

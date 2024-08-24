import dynamic from 'next/dynamic'
import { Container, Toolbar, Grid } from '@mui/material'

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
const DrawerOrganism = dynamic(() => import('@/components/organisms/drawer'))

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
	const { children, params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Container maxWidth="xl">
			<Toolbar />

			<Grid container direction="row" flexWrap="nowrap" spacing={{ xs: 1, md: 2 }}>
				<DrawerOrganism lng={lng} />

				<Grid item width={`calc(100% - ${ThemeConfig.listWidth}px)`}>
					{children}
				</Grid>
			</Grid>
		</Container>
	)
}

export default MainLayout

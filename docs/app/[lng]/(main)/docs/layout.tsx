import dynamic from 'next/dynamic'
import { Container, Toolbar, Grid } from '@mui/material'

// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/app/layouts'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
const LeftMenuOrganism = dynamic(() => import('@/components/organisms/menu/left'))

// Metadata
export const generateMetadata = async (props: LayoutProps): Promise<Metadata> => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: `${t('links:docs')} | ${t('common:app.name')}` }

	return metadata
}

const DocsLayout = (props: LayoutProps) => {
	// Props
	const { params, children } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Container maxWidth="xl">
			<Toolbar />

			<Grid container direction="row" flexWrap={{ md: 'nowrap' }} spacing={{ xs: 1, md: 2 }}>
				<LeftMenuOrganism lng={lng} />

				<Grid item flexGrow={{ md: 1 }} width={{ xs: 1, md: 'inherit' }}>
					{children}
				</Grid>
			</Grid>
		</Container>
	)
}

export default DocsLayout

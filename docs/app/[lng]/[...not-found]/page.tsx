import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Container, Grid, Paper } from '@mui/material'
import { Error as ErrorIcon, Link as LinkIcon } from '@mui/icons-material'

// Types
import type { Metadata } from 'next'
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))
const TitleTypographyAtom = dynamic(() => import('@/components/atoms/typography/title'))
const ParagraphTypographyAtom = dynamic(() => import('@/components/atoms/typography/paragraph'))

// Metadata
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: t('common:title.notFound') }

	return metadata
}

const NotFoundPage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Grid bgcolor="grey.100">
			<Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', height: '100dvh' }}>
				<Paper variant="outlined" sx={{ width: 1, borderRadius: 2 }}>
					<Grid container flexDirection="column" alignItems="center" spacing={2} py={4} px={{ xs: 1, md: 2 }}>
						<Grid item>
							<ErrorIcon color="error" sx={{ fontSize: 100 }} />
						</Grid>

						<Grid item>
							<TitleTypographyAtom lng={lng} text="common:title.notFound" />
						</Grid>

						<Grid item>
							<ParagraphTypographyAtom lng={lng} text="common:description.notFound" />
						</Grid>

						<Grid item>
							<Link href="/">
								<PrimaryButtonAtom lng={lng} title="form:button.goHome" startIcon={<LinkIcon />} />
							</Link>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Grid>
	)
}

export default NotFoundPage

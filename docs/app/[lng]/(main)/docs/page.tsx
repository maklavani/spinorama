import dynamic from 'next/dynamic'
import { Container } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const OverviewTemplate = dynamic(() => import('@/components/templates/docs/overview'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Container maxWidth="xl">
			<OverviewTemplate lng={lng} />
		</Container>
	)
}

export default HomePage

import dynamic from 'next/dynamic'
import { Container } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const IndexTemplate = dynamic(() => import('@/components/templates/docs'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Container maxWidth="xl">
			<IndexTemplate lng={lng} />
		</Container>
	)
}

export default HomePage

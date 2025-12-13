import dynamic from 'next/dynamic'
import { Container } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Components
const OverviewTemplate = dynamic(() => import('@/components/templates/docs/overview'))

const HomePage = async (props: PageProps) => {
	// Props
	const { params } = props
	const { lng } = await params

	return (
		<Container maxWidth="xl">
			<OverviewTemplate lng={lng} />
		</Container>
	)
}

export default HomePage

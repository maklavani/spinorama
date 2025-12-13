import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Components
const HomeTemplate = dynamic(() => import('@/components/templates/home'))

const HomePage = async (props: PageProps) => {
	// Props
	const { params } = props
	const { lng } = await params

	return (
		<Box component="main" width={1} px={3}>
			<HomeTemplate lng={lng} />
		</Box>
	)
}

export default HomePage

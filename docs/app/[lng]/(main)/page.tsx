import dynamic from 'next/dynamic'
import { Box, Toolbar } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const HomeTemplate = dynamic(() => import('@/components/templates/home'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Box component="main" width={1} px={3}>
			<Toolbar />
			<HomeTemplate lng={lng} />
		</Box>
	)
}

export default HomePage

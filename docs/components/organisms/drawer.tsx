import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'

// Types
import { DrawerProps } from '@/types/components/organisms/drawer'
import { ListItemProp } from '@/types/components/molecules/list'

// Configurations
import ThemeConfig from '@/config/theme'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))

const DrawerOrganism = (props: DrawerProps) => {
	// Props
	const { lng } = props

	// Variables
	const items: ListItemProp[] = [{ title: 'links:gettingStarted', link: `/${lng}/docs`, children: [{ title: 'links:installation', link: `/${lng}/docs/installation` }] }]

	return (
		<Grid item width={ThemeConfig.listWidth}>
			<Grid container position="sticky" top={{ xs: 56, md: 64 }}>
				<ListMolecule lng={lng} items={items} />
			</Grid>
		</Grid>
	)
}

export default DrawerOrganism

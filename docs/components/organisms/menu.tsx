import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'
import { GitHub as GitHubIcon, Favorite as FavoriteIcon } from '@mui/icons-material'

// Types
import type { MenuProps } from '@/types/components/organisms/menu'
import type { ListItemProps } from '@/types/components/molecules/list'

// Configurations
import ThemeConfig from '@/config/theme'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))

const MenuOrganism = (props: MenuProps) => {
	// Props
	const { lng } = props

	// Variables
	const items: ListItemProps[] = [
		{
			title: 'links:gettingStarted',
			children: [
				{ title: 'links:overview', link: `/${lng}/docs` },
				{ title: 'links:installation', link: `/${lng}/docs/installation` }
			]
		},
		{ title: 'links:github', link: 'https://github.com/maklavani/spinorama', icon: <GitHubIcon /> },
		{ title: 'links:sponser', link: 'https://opencollective.com/spinorama', icon: <FavoriteIcon />, iconColor: '#f44336' }
	]

	return (
		<Grid item width={{ xs: 1, md: ThemeConfig.listWidth }}>
			<Grid
				container
				position="sticky"
				top={{ xs: 56, md: 64 }}
				sx={{
					'& .MuiPaper-root': {
						width: 1,
						bgcolor: 'inherit',
						'& .MuiList-root': {
							width: 1,
							py: 1,
							'& a': { width: 1 }
						}
					}
				}}
			>
				<ListMolecule lng={lng} items={items} />
			</Grid>
		</Grid>
	)
}

export default MenuOrganism

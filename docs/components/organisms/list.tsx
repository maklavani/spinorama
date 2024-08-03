import { Drawer, Toolbar } from '@mui/material'

// Configurations
import ThemeConfig from '@/config/theme'

const ListOrganism = () => {
	return (
		<Drawer
			variant="permanent"
			anchor="left"
			sx={{
				width: ThemeConfig.listWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: ThemeConfig.listWidth,
					boxSizing: 'border-box',
					borderRight: 0
				}
			}}
		>
			<Toolbar />
		</Drawer>
	)
}

export default ListOrganism

'use client'

import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { AppBar, Container, Toolbar, Grid } from '@mui/material'

// Types
import type { AppbarProps } from '@/types/components/organisms/appbar'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const theme = useTheme()

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				component="nav"
				sx={{
					color: 'inherit',
					bgcolor: alpha('#fff', 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: 'none',
					zIndex: theme.zIndex.drawer + 1,
					'& .MuiToolbar-root': { px: 0 }
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<Grid container spacing={{ xs: 1, md: 2 }}>
							<Grid item>
								<LogoShapeAtom lng={lng} />
							</Grid>

							<Grid item flexGrow={1}></Grid>

							<Grid item></Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism

'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid2 as Grid } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

// Types
import type { Theme } from '@mui/material'
import type { AppbarProps } from '@/types/components/organisms/appbar'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const TopMenuOrganism = dynamic(() => import('@/components/organisms/menu/top'))
const MobileDrawerOrganism = dynamic(() => import('@/components/organisms/drawer/mobile'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const muiTheme = useTheme()
	const appBarRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState<boolean>(false)
	const lessThanMedium = useMediaQuery(muiTheme.breakpoints.down('md'))
	const greaterThanMedium = useMediaQuery(muiTheme.breakpoints.up('md'))

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				ref={appBarRef}
				position="fixed"
				component="nav"
				sx={(theme: Theme) => ({
					color: 'inherit',
					backgroundImage: 'none',
					bgcolor: alpha('#fff', 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: 'none',
					'& .MuiToolbar-root': { px: 0 },
					...theme.applyStyles('dark', {
						bgcolor: alpha('#0f132e', 0.17)
					})
				})}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1, md: 2 }} width={1}>
							<Grid size="auto">
								<LogoShapeAtom lng={lng} />
							</Grid>

							{lessThanMedium && (
								<Grid size="auto">
									<IconButtonAtom icon={<MenuIcon />} onClick={() => setOpen(!open)} />
								</Grid>
							)}

							{greaterThanMedium && (
								<Grid size="grow">
									<TopMenuOrganism lng={lng} />
								</Grid>
							)}
						</Grid>
					</Toolbar>
				</Container>

				{!greaterThanMedium && <MobileDrawerOrganism lng={lng} open={open} setOpen={setOpen} />}
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism

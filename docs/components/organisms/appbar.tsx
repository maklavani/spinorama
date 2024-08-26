'use client'

import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

// Types
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
	const theme = useTheme()
	const appBarRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState<boolean>(false)
	const lessThanMedium = useMediaQuery(theme.breakpoints.down('md'))
	const greaterThanMedium = useMediaQuery(theme.breakpoints.up('md'))

	// Callbacks
	useEffect(() => {
		if (appBarRef.current) appBarRef.current.style.backgroundColor = alpha(theme.palette.mode === 'dark' ? '#0f132e' : '#fff', 0.17)
	}, [theme])

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				ref={appBarRef}
				position="fixed"
				component="nav"
				sx={{
					color: 'inherit',
					backgroundImage: 'none',
					bgcolor: 'inherit',
					backdropFilter: 'blur(20px)',
					boxShadow: 'none',
					'& .MuiToolbar-root': { px: 0 }
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1, md: 2 }}>
							<Grid item>
								<LogoShapeAtom lng={lng} />
							</Grid>

							{lessThanMedium && (
								<Grid item>
									<IconButtonAtom icon={<MenuIcon />} onClick={() => setOpen(!open)} />
								</Grid>
							)}

							{greaterThanMedium && (
								<Grid item flexGrow={1}>
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

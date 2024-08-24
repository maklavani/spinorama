'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, useColorScheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid } from '@mui/material'

import {
	NorthEast as NorthEastIcon,
	NorthWest as NorthWestIcon,
	BrightnessAuto as BrightnessAutoIcon,
	LightMode as LightModeIcon,
	NightsStay as NightsStayIcon,
	Translate as TranslateIcon,
	GitHub as GitHubIcon
} from '@mui/icons-material'

// Types
import type { AppbarProps } from '@/types/components/organisms/appbar'
import type { ListItemProp } from '@/types/components/molecules/list'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const theme = useTheme()
	const { mode, setMode } = useColorScheme()
	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')

	const menu: ListItemProp[] = [
		{ title: 'links:docs', link: `/${lng}/docs` },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: theme.direction === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon /> }
	]

	const settingsMenu: ListItemProp[] = [
		{ link: 'https://opencollective.com/spinorama', icon: <OpenCollectiveIconAtom />, iconColor: '#7ba8ea' },
		{ link: 'https://github.com/maklavani/spinorama', icon: <GitHubIcon /> }
	]

	// Callbacks
	const changeMode = () => {
		console.log(mode)
		if (preferredColorScheme) setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')
		else setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light')
	}

	const [settings, setSettings] = useState<ListItemProp[]>([...[{ icon: <BrightnessAutoIcon />, onClick: changeMode }], ...settingsMenu])

	useEffect(() => {
		setSettings([...[{ icon: mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />, onClick: changeMode }], ...settingsMenu])
	}, [mode])

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				component="nav"
				sx={{
					color: 'inherit',
					backgroundImage: 'none',
					bgcolor: alpha(theme.palette.mode === 'dark' ? '#0f132e' : '#fff', 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: 'none',
					zIndex: theme.zIndex.drawer + 1,
					'& .MuiToolbar-root': { px: 0 }
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<Grid
							container
							alignItems="center"
							spacing={{ xs: 1, md: 2 }}
							sx={{
								'& .MuiList-root': {
									display: 'flex',
									flexDirection: 'row',
									gap: 1
								}
							}}
						>
							<Grid item>
								<LogoShapeAtom lng={lng} />
							</Grid>

							<Grid item flexGrow={1} ml={2}>
								<Grid container>
									<Grid
										item
										sx={{
											'& .MuiButtonBase-root': {
												p: 1,
												borderRadius: 1,
												'&.list-item-with-icon': {
													pr: 2,
													'& .MuiListItemIcon-root': {
														mr: 0,
														position: 'absolute',
														top: 8,
														right: 6,
														'& .MuiSvgIcon-root': { fontSize: 10 }
													}
												}
											}
										}}
									>
										<ListMolecule lng={lng} items={menu} />
									</Grid>
								</Grid>
							</Grid>

							<Grid item>
								<Grid container>
									<Grid
										item
										sx={{
											'& .MuiButtonBase-root': {
												p: 1.25,
												borderRadius: 1,
												'& .MuiListItemIcon-root': {
													'& .MuiSvgIcon-root': { fontSize: 28 }
												}
											}
										}}
									>
										<ListMolecule lng={lng} items={settings} />
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism

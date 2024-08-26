'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, useColorScheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid, Divider } from '@mui/material'

import {
	Menu as MenuIcon,
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
import type { LinkItemProps } from '@/types/components/atoms/list-item'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const DrawerOrganism = dynamic(() => import('@/components/organisms/drawer'))
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const { t } = useTranslation(lng)
	const theme = useTheme()
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const appBarRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState<boolean>(false)
	const greaterThanMedium = useMediaQuery(theme.breakpoints.up('md'))
	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')

	const menu: LinkItemProps[] = [
		{ title: 'links:docs', link: `/${lng}/docs` },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: theme.direction === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon /> }
	]

	const settingsMenu: LinkItemProps[] = [
		{
			icon: <TranslateIcon />,
			children: LocaleConfig.list.map(item => ({
				title: `${t(`common:title.${item}`)} (${item})`,
				link: pathname.replace(`/${lng}`, `/${item}`),
				linkType: 'mui'
			}))
		},
		{ link: 'https://opencollective.com/spinorama', icon: <OpenCollectiveIconAtom />, iconColor: '#7ba8ea' },
		{ link: 'https://github.com/maklavani/spinorama', icon: <GitHubIcon /> }
	]

	// Callbacks
	const changeMode = useCallback(() => {
		if (preferredColorScheme) setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')
		else setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light')

		if (pathname === `/${lng}`) window.location.reload()
	}, [lng, mode, preferredColorScheme, pathname, setMode])

	const [settings, setSettings] = useState<LinkItemProps[]>([{ icon: <BrightnessAutoIcon />, onClick: changeMode }])

	useEffect(() => {
		setSettings([{ icon: mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />, onClick: changeMode }])
	}, [changeMode, mode])

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
						<Grid
							container
							justifyContent="space-between"
							alignItems="center"
							spacing={{ xs: 1, md: 2 }}
							sx={{
								'& .MuiPaper-root': {
									'& .MuiList-root': {
										display: 'flex',
										flexDirection: 'row',
										gap: 1,
										'& .MuiListItem-root': {
											position: 'relative',
											'& .MuiPaper-root': {
												visibility: 'hidden',
												opacity: 0,
												p: 1,
												position: 'absolute',
												top: 54,
												left: 0,
												bgcolor: alpha(theme.palette.mode === 'dark' ? '#252f72' : '#fff', 0.17),
												backdropFilter: 'blur(20px)',
												boxShadow: theme.shadows[1],
												transition: 'all 0.2s ease',
												'& .MuiList-root': {
													flexDirection: 'column',
													gap: 0,
													'& .MuiButtonBase-root': {
														minWidth: 120,
														py: 0.5,
														'& .MuiTypography-root': { fontSize: 14 }
													}
												}
											},
											'&:hover': {
												'& > .MuiButtonBase-root': { bgcolor: theme.palette.mode === 'dark' ? alpha('#fff', 0.08) : alpha('#000', 0.08) },
												'& > .MuiPaper-root': {
													visibility: 'visible',
													opacity: 1
												}
											}
										}
									}
								}
							}}
						>
							<Grid item>
								<LogoShapeAtom lng={lng} />
							</Grid>

							{!greaterThanMedium && (
								<Grid item>
									<IconButtonAtom icon={<MenuIcon />} onClick={() => setOpen(!open)} />
								</Grid>
							)}

							{greaterThanMedium && (
								<>
									<Grid item display={{ xs: 'none', md: 'flex' }}>
										<Divider orientation="vertical" sx={{ height: 24 }} />
									</Grid>

									<Grid item display={{ xs: 'none', md: 'flex' }}>
										<Grid container>
											<Grid
												item
												sx={{
													'& .MuiListItem-root': {
														mb: 0,
														'& .MuiButtonBase-root': {
															p: 1,
															borderRadius: 1,
															'&.list-item-with-icon': {
																pr: 2.25,
																'& .MuiListItemIcon-root': {
																	opacity: 0.7,
																	mr: 0,
																	position: 'absolute',
																	top: 8,
																	right: 6,
																	'& .MuiSvgIcon-root': { fontSize: 8 }
																}
															}
														}
													}
												}}
											>
												<ListMolecule lng={lng} items={menu} />
											</Grid>
										</Grid>
									</Grid>

									<Grid item flexGrow={1} display={{ xs: 'none', md: 'flex' }}>
										<Grid container justifyContent="flex-end">
											<Grid
												item
												sx={{
													'& .MuiListItem-root': {
														mb: 0,
														'& .MuiButtonBase-root': {
															p: 1.25,
															borderRadius: 1,
															'& .MuiListItemIcon-root': { '& .MuiSvgIcon-root': { fontSize: 28 } }
														}
													}
												}}
											>
												<ListMolecule lng={lng} items={[...settings, ...settingsMenu]} />
											</Grid>
										</Grid>
									</Grid>
								</>
							)}
						</Grid>
					</Toolbar>
				</Container>

				{!greaterThanMedium && <DrawerOrganism lng={lng} open={open} setOpen={setOpen} />}
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism

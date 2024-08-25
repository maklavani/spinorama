'use client'

import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, useColorScheme } from '@mui/material/styles'
import { SwipeableDrawer, Grid, Toolbar } from '@mui/material'

import {
	Close as CloseIcon,
	Cottage as CottageIcon,
	Article as ArticleIcon,
	NorthEast as NorthEastIcon,
	NorthWest as NorthWestIcon,
	BrightnessAuto as BrightnessAutoIcon,
	LightMode as LightModeIcon,
	NightsStay as NightsStayIcon,
	Translate as TranslateIcon,
	GitHub as GitHubIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
	ArrowBackIosNew as ArrowBackIosNewIcon
} from '@mui/icons-material'

// Types
import type { Mode } from '@mui/system/cssVars/useCurrentColorScheme'
import type { DrawerProps } from '@/types/components/organisms/drawer'
import type { ListItemProps } from '@/types/components/molecules/list'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const DrawerOrganism = (props: DrawerProps) => {
	// Props
	const { lng, open, setOpen } = props

	// Variables
	const { t } = useTranslation(lng)
	const theme = useTheme()
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

	const menu: ListItemProps[] = [
		{ title: 'links:home', link: `/${lng}`, icon: <CottageIcon />, onClick: () => setOpen(!open) },
		{ title: 'links:docs', link: `/${lng}/docs`, icon: <ArticleIcon />, onClick: () => setOpen(!open) },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: theme.direction === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon />, onClick: () => setOpen(!open) },
		{
			title: 'links:language',
			icon: <TranslateIcon />,
			endIcon: theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />,
			onClick: () => setOpen(!open),
			children: LocaleConfig.list.map(item => ({
				title: `${t(`common:title.${item}`)} (${item})`,
				link: pathname.replace(`/${lng}`, `/${item}`),
				linkType: 'mui',
				onClick: () => setOpen(!open)
			}))
		},
		{
			title: 'links:theme',
			icon: mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />,
			endIcon: theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />,
			onClick: () => setOpen(!open),
			children: [
				{
					title: 'links:system',
					icon: <BrightnessAutoIcon />,
					onClick: () => {
						changeMode('system')
						setOpen(!open)
					}
				},
				{
					title: 'links:light',
					icon: <LightModeIcon />,
					onClick: () => {
						changeMode('light')
						setOpen(!open)
					}
				},
				{
					title: 'links:dark',
					icon: <NightsStayIcon />,
					onClick: () => {
						changeMode('dark')
						setOpen(!open)
					}
				}
			]
		},
		{ title: 'links:openCollective', link: 'https://opencollective.com/spinorama', icon: <OpenCollectiveIconAtom />, iconColor: '#7ba8ea', onClick: () => setOpen(!open) },
		{ title: 'links:github', link: 'https://github.com/maklavani/spinorama', icon: <GitHubIcon />, onClick: () => setOpen(!open) }
	]

	// Callbacks
	const changeMode = useCallback(
		(mode: Mode) => {
			setMode(mode)

			if (pathname === `/${lng}`) window.location.reload()
		},
		[lng, pathname, setMode]
	)

	return (
		<SwipeableDrawer
			anchor="right"
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
			sx={{
				'& .MuiPaper-root': {
					width: 1,
					bgcolor: 'background.default',
					'& .MuiPaper-root': {
						bgcolor: 'inherit',
						'& a': { width: 1 }
					}
				}
			}}
		>
			<Toolbar sx={{ justifyContent: 'end' }}>
				<IconButtonAtom icon={<CloseIcon />} onClick={() => setOpen(!open)} />
			</Toolbar>

			<Grid container px={2}>
				<ListMolecule lng={lng} items={menu} />
			</Grid>
		</SwipeableDrawer>
	)
}

export default DrawerOrganism

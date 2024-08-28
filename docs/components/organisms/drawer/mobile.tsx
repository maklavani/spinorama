'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, useColorScheme } from '@mui/material/styles'
import { SwipeableDrawer, Grid2 as Grid, Toolbar, SvgIcon } from '@mui/material'

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
import type { LinkItemProps } from '@/types/components/atoms/list-item'

// Configurations
import LocaleConfig from '@/config/locale'

// Fonts
import RobotoFont from '@/styles/fonts/roboto'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const ListItemAtom = dynamic(() => import('@/components/atoms/list-item'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const MobileDrawerOrganism = (props: DrawerProps) => {
	// Props
	const { lng, open, setOpen } = props

	// Variables
	const muiTheme = useTheme()
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const [parent, setParent] = useState<string>('')
	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

	const menu: LinkItemProps[] = [
		{ title: 'links:home', link: `/${lng}`, icon: <CottageIcon />, onClick: () => setOpen(!open) },
		{ title: 'links:docs', link: `/${lng}/docs`, icon: <ArticleIcon />, onClick: () => setOpen(!open) },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: muiTheme.direction === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon />, onClick: () => setOpen(!open) },
		{
			title: 'links:language',
			icon: <TranslateIcon />,
			endIcon: muiTheme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />,
			onClick: () => setParent('language'),
			children: LocaleConfig.list.map(item => ({
				parent: 'language',
				title: `common:title.${item}`,
				endIcon: (
					<SvgIcon>
						<text x={12} y={18} textAnchor="middle" fontFamily={RobotoFont.style.fontFamily} fontSize={20} fontWeight={500}>
							<tspan>{item}</tspan>
						</text>
					</SvgIcon>
				),
				link: pathname.replace(`/${lng}`, `/${item}`),
				linkType: 'mui',
				onClick: () => {
					setParent('')
					setOpen(!open)
				}
			}))
		},
		{
			title: 'links:theme',
			icon: mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />,
			endIcon: muiTheme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />,
			onClick: () => setParent('theme'),
			children: [
				{
					parent: 'theme',
					title: 'links:system',
					icon: <BrightnessAutoIcon />,
					onClick: () => {
						changeMode('system')
						setParent('')
					}
				},
				{
					parent: 'theme',
					title: 'links:light',
					icon: <LightModeIcon />,
					onClick: () => {
						changeMode('light')
						setParent('')
					}
				},
				{
					parent: 'theme',
					title: 'links:dark',
					icon: <NightsStayIcon />,
					onClick: () => {
						changeMode('dark')
						setParent('')
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
				<ListItemAtom
					lng={lng}
					item={{
						title: 'links:back',
						icon: muiTheme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />,
						onClick: () => setParent('')
					}}
					showItem={parent !== ''}
				/>

				<ListMolecule lng={lng} items={menu} parent={parent} />
			</Grid>
		</SwipeableDrawer>
	)
}

export default MobileDrawerOrganism

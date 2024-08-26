'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, useColorScheme, alpha } from '@mui/material/styles'
import { useMediaQuery, Grid, Divider, SvgIcon } from '@mui/material'

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
import type { MenuProps } from '@/types/components/organisms/menu'
import type { LinkItemProps } from '@/types/components/atoms/list-item'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Fonts
import RobotoFont from '@/styles/fonts/roboto'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const TopMenuOrganism = (props: MenuProps) => {
	// Props
	const { lng } = props

	// Variables
	const { t } = useTranslation(lng)
	const theme = useTheme()
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')

	const menu: LinkItemProps[] = [
		{ title: 'links:docs', link: `/${lng}/docs` },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: theme.direction === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon /> }
	]

	const settingsMenu: LinkItemProps[] = [
		{
			icon: <TranslateIcon />,
			children: LocaleConfig.list.map(item => ({
				title: `common:title.${item}`,
				endIcon: (
					<SvgIcon>
						<text x={12} y={16} textAnchor="middle" fontFamily={RobotoFont.style.fontFamily} fontSize={14} fontWeight={500}>
							<tspan>{item}</tspan>
						</text>
					</SvgIcon>
				),
				link: pathname.replace(`/${lng}`, `/${item}`),
				linkType: 'mui'
			}))
		},
		{
			icon: mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />,
			onClick: () => changeMode()
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

	return (
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
								right: 0,
								bgcolor: alpha(theme.palette.mode === 'dark' ? '#252f72' : '#fff', 0.17),
								backdropFilter: 'blur(20px)',
								boxShadow: theme.shadows[1],
								transition: 'all 0.2s ease',
								'& .MuiList-root': {
									flexDirection: 'column',
									gap: 0.25,
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
						<ListMolecule lng={lng} items={settingsMenu} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default TopMenuOrganism

'use client'

import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { dir } from 'i18next'
import { useColorScheme, alpha } from '@mui/material/styles'
import { useMediaQuery, Grid2 as Grid, Divider, SvgIcon } from '@mui/material'

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
import type { Theme } from '@mui/material'
import type { MenuProps } from '@/types/components/organisms/menu'
import type { LinkItemProps } from '@/types/components/atoms/list-item'

// Configurations
import LocaleConfig from '@/config/locale'

// Fonts
import RobotoFont from '@/styles/fonts/roboto'

// Components
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const OpenCollectiveIconAtom = dynamic(() => import('@/components/atoms/icons/open-collective'))

const TopMenuOrganism = (props: MenuProps) => {
	// Props
	const { lng } = props

	// Variables
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')

	const menu: LinkItemProps[] = [
		{ title: 'links:docs', link: `/${lng}/docs` },
		{ title: 'links:regiti', link: 'https://regiti.com', icon: dir(lng) === 'rtl' ? <NorthWestIcon /> : <NorthEastIcon /> }
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
			sx={(theme: Theme) => ({
				'& .MuiPaper-root': {
					backgroundImage: 'none',
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
								bgcolor: alpha('#fff', 0.17),
								backdropFilter: 'blur(20px)',
								boxShadow: theme.shadows[1],
								transition: 'all 0.2s ease',
								...theme.applyStyles('dark', {
									bgcolor: alpha('#252f72', 0.17)
								}),
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
								'& > .MuiButtonBase-root': {
									bgcolor: alpha('#000', 0.08),
									...theme.applyStyles('dark', {
										bgcolor: alpha('#fff', 0.08)
									})
								},
								'& > .MuiPaper-root': {
									visibility: 'visible',
									opacity: 1
								}
							}
						}
					}
				}
			})}
		>
			<Grid display={{ xs: 'none', md: 'flex' }}>
				<Divider orientation="vertical" sx={{ height: 24 }} />
			</Grid>

			<Grid display={{ xs: 'none', md: 'flex' }}>
				<Grid container>
					<Grid
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

			<Grid size="grow" display={{ xs: 'none', md: 'flex' }}>
				<Grid container justifyContent="flex-end" width={1}>
					<Grid
						size={12}
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

'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, Grid2 as Grid, Box } from '@mui/material'
import { GitHub as GitHubIcon, Favorite as FavoriteIcon, List as ListIcon } from '@mui/icons-material'

// Types
import type { Theme } from '@mui/material'
import type { MenuProps } from '@/types/components/organisms/menu'
import type { LinkItemProps } from '@/types/components/atoms/list-item'

// Configurations
import ThemeConfig from '@/config/theme'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const EdgeDrawerOrganism = dynamic(() => import('@/components/organisms/drawer/edge'))
const ListMolecule = dynamic(() => import('@/components/molecules/list'))
const ListItemAtom = dynamic(() => import('@/components/atoms/list-item'))

const LeftMenuOrganism = (props: MenuProps) => {
	// Props
	const { lng } = props

	// Variables
	const muiTheme = useTheme()
	const [open, setOpen] = useState<boolean>(false)
	const lessThanMedium = useMediaQuery(muiTheme.breakpoints.down('md'))
	const greaterThanMedium = useMediaQuery(muiTheme.breakpoints.up('md'))

	const menu: LinkItemProps[] = [
		{
			title: 'links:gettingStarted',
			children: [
				{ title: 'links:overview', link: `/${lng}/docs` },
				{ title: 'links:installation', link: `/${lng}/docs/installation` }
			]
		},
		{ title: 'links:github', link: 'https://github.com/maklavani/spinorama', icon: <GitHubIcon /> },
		{ title: 'links:sponser', link: 'https://opencollective.com/spinorama', icon: <FavoriteIcon />, iconColor: '#f44336' }
	]

	return (
		<>
			{lessThanMedium && (
				<HideOnScroll onlyMobile={true}>
					<Box
						width={1}
						position="sticky"
						top={56}
						pb={1}
						zIndex="calc(var(--mui-zIndex-appBar) + 1)"
						sx={(theme: Theme) => ({
							bgcolor: alpha('#fff', 0.17),
							backdropFilter: 'blur(50px)',
							...theme.applyStyles('dark', {
								bgcolor: alpha('#0f132e', 0.17)
							})
						})}
					>
						<ListItemAtom
							lng={lng}
							item={{
								title: 'links:menu',
								icon: <ListIcon />,
								onClick: () => setOpen(!open)
							}}
							showItem={true}
						/>
					</Box>
				</HideOnScroll>
			)}

			{lessThanMedium && (
				<EdgeDrawerOrganism lng={lng} open={open} setOpen={setOpen}>
					<Grid
						size={12}
						sx={{
							'& .MuiPaper-root': {
								width: 1,
								bgcolor: 'none',
								'& .MuiList-root': {
									width: 1,
									py: 1,
									'& a': { width: 1 }
								}
							}
						}}
					>
						<ListMolecule lng={lng} items={menu} />
					</Grid>
				</EdgeDrawerOrganism>
			)}

			{greaterThanMedium && (
				<Grid width={{ xs: 1, md: ThemeConfig.listWidth }}>
					<Grid
						container
						position="sticky"
						top={{ xs: 56, md: 64 }}
						sx={{
							'& .MuiPaper-root': {
								width: 1,
								bgcolor: 'inherit',
								'& .MuiList-root': {
									width: 1,
									py: 1,
									'& a': { width: 1 }
								}
							}
						}}
					>
						<ListMolecule lng={lng} items={menu} />
					</Grid>
				</Grid>
			)}
		</>
	)
}

export default LeftMenuOrganism

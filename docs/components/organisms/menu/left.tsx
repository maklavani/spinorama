'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, Grid, Box } from '@mui/material'
import { GitHub as GitHubIcon, Favorite as FavoriteIcon, List as ListIcon } from '@mui/icons-material'

// Types
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
	const theme = useTheme()
	const [open, setOpen] = useState<boolean>(false)
	const lessThanMedium = useMediaQuery(theme.breakpoints.down('md'))
	const greaterThanMedium = useMediaQuery(theme.breakpoints.up('md'))

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
						zIndex={theme.zIndex.appBar - 1}
						sx={{
							bgcolor: alpha(theme.palette.mode === 'dark' ? '#0f132e' : '#fff', 0.17),
							backdropFilter: 'blur(50px)'
						}}
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
						item
						xs={12}
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
				</EdgeDrawerOrganism>
			)}

			{greaterThanMedium && (
				<Grid item width={{ xs: 1, md: ThemeConfig.listWidth }}>
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

'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, alpha } from '@mui/material/styles'
import { AppBar, Container, Toolbar } from '@mui/material'

// Types
import type { AppbarProps } from '@/types/components/organisms/appbar'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const theme = useTheme()
	const pathname = usePathname()
	const isHomePage = pathname === `/${lng}`

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				component="nav"
				sx={{
					color: 'inherit',
					bgcolor: alpha('#fff', 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: isHomePage ? 'none' : `0 0 23px ${alpha('#000', 0.085)}`,
					zIndex: theme.zIndex.drawer + 1
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<LogoShapeAtom lng={lng} />
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism

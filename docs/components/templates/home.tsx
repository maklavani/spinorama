'use client'

import dynamic from 'next/dynamic'
import { Grid, Toolbar, Box, Container } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

// Types
import type { HomeProps } from '@/types/components/templates/home'
import { textAlign } from '@mui/system'

// MDX
const HomeEn = dynamic(() => import('@/md/en/home.mdx'))
const HomeFa = dynamic(() => import('@/md/fa/home.mdx'))

// Components
const SceneOrganism = dynamic(() => import('@/components/organisms/scene'), { ssr: false })

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return (
		<Grid container>
			<Box width="100dvw" height="100dvh" position="absolute" top={0} left={0}>
				<Canvas orthographic>
					<OrthographicCamera makeDefault position={[0, 0, 1]} />
					<SceneOrganism />
				</Canvas>
			</Box>

			<Container
				maxWidth="md"
				sx={{
					mt: { xs: 2, md: 10 },
					textAlign: 'center',
					zIndex: 1
				}}
			>
				<Toolbar />

				{lng === 'fa' ? <HomeFa /> : <HomeEn />}
			</Container>
		</Grid>
	)
}

export default HomeTemplate

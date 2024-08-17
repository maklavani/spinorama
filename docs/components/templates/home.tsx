'use client'

import dynamic from 'next/dynamic'
import { Grid, Toolbar, Box } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

// Types
import type { HomeProps } from '@/types/components/templates/home'

// Components
const SceneOrganism = dynamic(() => import('@/components/organisms/scene'), { ssr: false })

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return (
		<Grid container>
			<Toolbar />

			<Box width="100dvw" height="100dvh" position="absolute" top={0} left={0}>
				<Canvas orthographic>
					<OrthographicCamera makeDefault position={[0, 0, 1]} />
					<SceneOrganism />
				</Canvas>
			</Box>
		</Grid>
	)
}

export default HomeTemplate

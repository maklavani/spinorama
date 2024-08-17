'use client'

import { Grid, Toolbar } from '@mui/material'
import { Canvas } from '@react-three/fiber'

// Types
import type { HomeProps } from '@/types/components/templates/home'

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return (
		<Grid container sx={{ height: '100dvh' }}>
			<Toolbar />

			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
			</Canvas>
		</Grid>
	)
}

export default HomeTemplate

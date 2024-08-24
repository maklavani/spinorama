'use client'

import dynamic from 'next/dynamic'
import { NoToneMapping } from 'three'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

// Components
const SceneMolecule = dynamic(() => import('@/components/molecules/scene'), { ssr: false })

const CanvasOrganism = () => {
	return (
		<Canvas
			orthographic
			onCreated={({ gl }) => {
				gl.toneMapping = NoToneMapping
			}}
		>
			<OrthographicCamera makeDefault position={[0, 0, 1]} />
			<SceneMolecule />
		</Canvas>
	)
}

export default CanvasOrganism

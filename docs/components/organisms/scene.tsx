'use client'

import { useRef, useState, useEffect } from 'react'
import { Vector2, MathUtils } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

// Shaders
import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'

// Types
import type { Mesh, ShaderMaterial } from 'three'

const SceneOrganism = () => {
	// Variables
	const meshRef = useRef<Mesh>(null)
	const { viewport, size } = useThree()
	const [vMouse, setVMouse] = useState(new Vector2())
	const [vMouseDamp, setVMouseDamp] = useState(new Vector2())

	// Callbacks
	// Update uniforms on resize
	useEffect(() => {
		const dpr = Math.min(window.devicePixelRatio, 2)

		if (meshRef.current) {
			meshRef.current.scale.set(size.width, size.height, 1)

			const material = meshRef.current.material as ShaderMaterial
			material.uniforms.u_resolution.value.set(size.width, size.height).multiplyScalar(dpr)
			material.uniforms.u_pixelRatio.value = dpr
		}
	}, [size])

	// Mouse move handling with damping effect
	useEffect(() => {
		const onPointerMove = (event: MouseEvent) => setVMouse(new Vector2(event.pageX, event.pageY))
		document.addEventListener('mousemove', onPointerMove)
		document.addEventListener('pointermove', onPointerMove)

		return () => {
			document.removeEventListener('mousemove', onPointerMove)
			document.removeEventListener('pointermove', onPointerMove)
		}
	}, [])

	// Animation loop
	useFrame((state, delta) => {
		// Damping mouse movement
		vMouseDamp.x = MathUtils.damp(vMouseDamp.x, vMouse.x, 8, delta)
		vMouseDamp.y = MathUtils.damp(vMouseDamp.y, vMouse.y, 8, delta)

		// Update shader uniforms
		if (meshRef.current) {
			const material = meshRef.current.material as ShaderMaterial
			material.uniforms.u_mouse.value = vMouseDamp
		}
	})

	return (
		<mesh ref={meshRef}>
			<planeGeometry args={[1, 1]} />

			<shaderMaterial
				attach="material"
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={{
					u_mouse: { value: new Vector2() },
					u_resolution: { value: new Vector2() },
					u_pixelRatio: { value: 2 }
				}}
				defines={{ VAR: 2 }}
			/>
		</mesh>
	)
}

export default SceneOrganism

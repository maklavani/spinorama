'use client'

import * as React from 'react'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Register GSAP plugin
gsap.registerPlugin(useGSAP)

// Types
import type { SpinoramaProps, SpinoramaSettings } from './index.types'

const Spinorama: React.FC<SpinoramaProps> = (props: SpinoramaProps) => {
	// Props
	const { duration, className, children } = props

	// Variables
	const container = React.useRef<HTMLDivElement>(null)

	// Settings
	const settings: SpinoramaSettings = {
		duration: duration || 10000
	}

	// Callbacks
	const { contextSafe } = useGSAP({ scope: container })

	const nextItem = React.useCallback(() => {
		contextSafe(() => {
			if (container.current) {
				// Get items
				const items = container.current.querySelectorAll('.spinorama-wrapper')

				if (items.length) {
					// Animate
					gsap.to(items, {
						xPercent: -100,
						duration: 1,
						ease: 'power2.inOut'
					})
				}
			}
		})
	}, [])

	React.useEffect(() => {
		// Call interval
		const interval = setInterval(nextItem, settings.duration)

		// Cleanup effect
		return () => {
			// Clear the interval when the component is unmounted
			clearInterval(interval)
		}
	}, [nextItem, settings.duration])

	return (
		<Box ref={container} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{children}
		</Box>
	)
}

export default Spinorama

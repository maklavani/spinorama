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
	const { duration, animateDuration, ease, className, children } = props

	// Variables
	const container = React.useRef<HTMLDivElement>(null)
	const [selected, setSelected] = React.useState<number>(0)
	const [totalItems, setTotalItems] = React.useState<number>(0)

	// Settings
	const settings: SpinoramaSettings = {
		duration: duration || 10000,
		animateDuration: (animateDuration || 1000) / 1000,
		ease: ease || 'power1.inOut'
	}

	// Callbacks
	const nextItem = React.useCallback(() => {
		// Find next index
		const nextIndex = (selected + 1) % totalItems
		setSelected(nextIndex)

		return nextIndex
	}, [selected, totalItems])

	const { contextSafe } = useGSAP(
		() => {
			// Set interval
			const interval = setInterval(() => {
				// Animate items
				animateItems(nextItem())
			}, settings.duration)

			// Find total items
			if (container.current && !totalItems) {
				const items = container.current.querySelectorAll('.spinorama-item')

				if (items.length) setTotalItems(items.length)
			}

			return () => {
				// Clear interval
				clearInterval(interval)
			}
		},
		{ scope: container, dependencies: [container, selected, totalItems] }
	)

	const animateItems = contextSafe((showIndex: number) => {
		if (container.current && totalItems) {
			// Find items
			const items = container.current.querySelectorAll('.spinorama-items')

			// Check items and animate it
			if (items.length) {
				gsap.to(items, {
					xPercent: 100 * showIndex,
					duration: settings.animateDuration,
					ease: settings.ease
				})
			}
		}
	})

	return (
		<Box ref={container} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, child => {
				if (React.isValidElement(child))
					// Clone element
					return React.cloneElement(child as React.ReactElement<any>, { selected })
				else return child
			})}
		</Box>
	)
}

export default Spinorama

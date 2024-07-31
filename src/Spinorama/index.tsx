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
	const [totalItems, setTotalItems] = React.useState<number>(0)

	// Settings
	const settings: SpinoramaSettings = {
		duration: duration || 10000,
		animateDuration: (animateDuration || 1000) / 1000,
		ease: ease || 'power1.inOut'
	}

	// Callbacks
	const { contextSafe } = useGSAP(
		() => {
			// Set interval
			const interval = setInterval(nextItem, settings.duration)

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
		{ scope: container, dependencies: [container, totalItems] }
	)

	const findSelected = (containerElm: HTMLDivElement) => {
		const items = containerElm.querySelectorAll('.spinorama-item')

		if (items.length) return Array.from(items).findIndex(item => item.classList.contains('selected'))

		return 0
	}

	const setClassName = (containerElm: HTMLDivElement, className: string, nextIndex: number) => {
		const items = containerElm.querySelectorAll('.spinorama-item')

		if (items.length)
			items.forEach((item, index) => {
				if (index === nextIndex) item.classList.add(className)
				else item.classList.remove(className)
			})
	}

	const nextItem = contextSafe(() => {
		if (container.current && totalItems) {
			// Find selected item
			const selected = findSelected(container.current)
			const nextIndex = (selected + 1) % totalItems
			setClassName(container.current, 'selected', nextIndex)

			// Find items
			const items = container.current.querySelectorAll('.spinorama-items')

			// Check items and animate it
			if (items.length) {
				gsap.to(items, {
					xPercent: 100 * nextIndex,
					duration: settings.animateDuration,
					ease: settings.ease
				})
			}
		}
	})

	return (
		<Box ref={container} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{children}
		</Box>
	)
}

export default Spinorama

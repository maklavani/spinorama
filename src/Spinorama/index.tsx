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
	const itemsInterval = React.useRef<NodeJS.Timeout | null>(null)
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
	const { contextSafe } = useGSAP({ scope: container, dependencies: [selected, totalItems] })

	// Animate items
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

	// Show item
	const showItem = React.useCallback(() => {
		const nextIndex = (selected + 1) % (totalItems || 1)
		setSelected(nextIndex)
		animateItems(nextIndex)
	}, [selected, totalItems, setSelected])

	// Find total items
	React.useEffect(() => {
		if (container.current && !totalItems) {
			const items = container.current.querySelectorAll('.spinorama-item')

			if (items.length) setTotalItems(items.length)
		}
	}, [totalItems])

	// Set interval
	React.useEffect(() => {
		itemsInterval.current = setInterval(() => {
			showItem()
		}, settings.duration)

		// Clear interval
		return () => {
			clearInterval(itemsInterval.current as NodeJS.Timeout)
		}
	}, [settings, showItem])

	return (
		<Box ref={container} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					// Clone element
					return React.cloneElement(child as React.ReactElement<any>, { selected: selected || 0 })
				} else return child
			})}
		</Box>
	)
}

export default Spinorama

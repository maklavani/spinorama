'use client'

import * as React from 'react'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Register GSAP plugin
gsap.registerPlugin(useGSAP)

// Types
import type { SpinoramaProps, SpinoramaSettings } from './index.types'
import type { SpinoramaWrapperProps } from '../Wrapper/index.types'
import type { SpinoramaItemProps } from '../Item/index.types'
import type { SpinoramaActionsProps } from '../Actions/index.types'
import type { SpinoramaButtonsProps } from '../Buttons/index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'
import type { SpinoramaThumbnailsProps } from '../Thumbnails/index.types'
import type { SpinoramaThumbnailProps } from '../Thumbnail/index.types'

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

	// Next item
	const nextItem = React.useCallback(() => {
		const nextIndex = (selected + 1) % (totalItems || 1)
		setSelected(nextIndex)
		animateItems(nextIndex)
	}, [selected, totalItems, setSelected])

	// prev item
	const prevItem = React.useCallback(() => {
		const prevIndex = (selected - 1 + (totalItems || 1)) % (totalItems || 1)
		setSelected(prevIndex)
		animateItems(prevIndex)
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
		itemsInterval.current = setInterval(() => nextItem, settings.duration)

		// Clear interval
		return () => {
			clearInterval(itemsInterval.current as NodeJS.Timeout)
		}
	}, [settings, nextItem])

	return (
		<Box ref={container} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-wrapper') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaWrapperProps>, {
							selected: selected || 0
						})
					else if (childType.indexOf('spinorama-item') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaItemProps>, {
							selected: selected === index
						})
					else if (childType.indexOf('spinorama-actions') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaActionsProps>, {
							selected: selected || 0
						})
					else if (childType.indexOf('spinorama-buttons') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaButtonsProps>, {
							nextOnClick: nextItem,
							prevOnClick: prevItem
						})
					else if (childType.indexOf('spinorama-next') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaNextProps>, {
							onClick: nextItem
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaPrevProps>, {
							onClick: prevItem
						})
					else if (childType.indexOf('spinorama-thumbnails') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailsProps>, {
							selected: selected || 0
						})
					else if (childType.indexOf('spinorama-thumbnail') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailProps>, {
							selected: selected === index
						})
					else return React.cloneElement(child)
				} else return child
			})}
		</Box>
	)
}

export default Spinorama

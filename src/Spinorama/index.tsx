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
	const containerRef = React.useRef<HTMLDivElement>(null)
	const nextRef = React.useRef<HTMLButtonElement>(null)
	const prevRef = React.useRef<HTMLButtonElement>(null)
	const thumbnailsRef = React.useRef<(HTMLButtonElement | null)[]>([])
	const [init, setInit] = React.useState<boolean>(false)

	// Settings
	const settings: SpinoramaSettings = {
		duration: duration || 10000,
		animateDuration: (animateDuration || 1000) / 1000,
		ease: ease || 'power1.inOut'
	}

	// Callbacks
	const { contextSafe } = useGSAP(
		(_, contextSafe) => {
			// Set Interval
			itemsInterval.current = setInterval(nextItem, settings.duration)

			// Next
			// @ts-ignore
			const onClickNext = contextSafe(nextItem)

			// Prev
			// @ts-ignore
			const onClickPrev = contextSafe(prevItem)

			// Thumbnail
			// @ts-ignore
			const onClickShow = contextSafe(showItem)

			nextRef.current?.addEventListener('click', onClickNext)
			prevRef.current?.addEventListener('click', onClickPrev)
			thumbnailsRef.current?.map((thumbnail, index) => thumbnail?.addEventListener('click', () => onClickShow(index)))

			return () => {
				// Clear Interval
				clearInterval(itemsInterval.current as NodeJS.Timeout)

				// Clear Events
				nextRef.current?.removeEventListener('click', onClickNext)
				prevRef.current?.removeEventListener('click', onClickPrev)
				thumbnailsRef.current?.map((thumbnail, index) => thumbnail?.removeEventListener('click', () => onClickShow(index)))
			}
		},
		{ scope: containerRef }
	)

	// Find selected
	const findClassName = contextSafe((className: string) => {
		const selectedItem = containerRef.current?.querySelector(`.spinorama-item.${className}`)

		if (selectedItem) {
			const selectedIndex = Array.from(selectedItem.parentNode?.children || []).indexOf(selectedItem)

			return selectedIndex
		}

		return 0
	})

	// Set class name
	const setClassName = contextSafe((className: string, index: number) => {
		const items = containerRef.current?.querySelectorAll('.spinorama-item')
		const thumbnails = containerRef.current?.querySelectorAll('.spinorama-thumbnail')

		if (items)
			items.forEach((item, itemIndex) => {
				if (itemIndex === index) item.classList.add(className)
				else item.classList.remove(className)
			})

		if (thumbnails)
			thumbnails.forEach((thumbnail, itemIndex) => {
				if (itemIndex === index) thumbnail.classList.add(className)
				else thumbnail.classList.remove(className)
			})
	})

	// Animate
	const animateItems = contextSafe((index: number) => {
		gsap.to('.spinorama-items', {
			xPercent: 100 * index,
			duration: settings.animateDuration,
			ease: settings.ease
		})
	})

	// Next item
	const nextItem = contextSafe(() => {
		const totalItems = containerRef.current?.querySelectorAll('.spinorama-item').length
		const selected = findClassName('selected')
		const nextIndex = (selected + 1) % (totalItems || 1)
		setClassName('selected', nextIndex)
		animateItems(nextIndex)

		// Clear Interval
		clearInterval(itemsInterval.current as NodeJS.Timeout)

		// Set Interval
		itemsInterval.current = setInterval(nextItem, settings.duration)
	})

	// Prev item
	const prevItem = contextSafe(() => {
		const totalItems = containerRef.current?.querySelectorAll('.spinorama-item').length
		const selected = findClassName('selected')
		const prevIndex = (selected - 1 + (totalItems || 1)) % (totalItems || 1)
		setClassName('selected', prevIndex)
		animateItems(prevIndex)

		// Clear Interval
		clearInterval(itemsInterval.current as NodeJS.Timeout)

		// Set Interval
		itemsInterval.current = setInterval(nextItem, settings.duration)
	})

	// Show item
	const showItem = contextSafe((selected: number) => {
		setClassName('selected', selected)
		animateItems(selected)

		// Clear Interval
		clearInterval(itemsInterval.current as NodeJS.Timeout)

		// Set Interval
		itemsInterval.current = setInterval(nextItem, settings.duration)
	})

	React.useEffect(() => {
		if (containerRef.current && !init) {
			setInit(true)
			setClassName('selected', 0)
		}
	}, [containerRef, init])

	return (
		<Box ref={containerRef} {...props} className={`spinorama${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-wrapper') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaWrapperProps>, {})
					else if (childType.indexOf('spinorama-item') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaItemProps>, {})
					else if (childType.indexOf('spinorama-actions') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaActionsProps>, {
							nextref: nextRef,
							prevref: prevRef,
							thumbnailsref: thumbnailsRef
						})
					else if (childType.indexOf('spinorama-buttons') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaButtonsProps>, {
							nextref: nextRef,
							prevref: prevRef
						})
					else if (childType.indexOf('spinorama-next') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaNextProps>, {
							buttonref: nextRef
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaPrevProps>, {
							buttonref: prevRef
						})
					else if (childType.indexOf('spinorama-thumbnails') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailsProps>, {
							thumbnailsref: thumbnailsRef
						})
					else if (childType.indexOf('spinorama-thumbnail') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailProps>, {
							thumbnailsref: thumbnailsRef
						})
					else return React.cloneElement(child)
				} else return child
			})}
		</Box>
	)
}

export default Spinorama

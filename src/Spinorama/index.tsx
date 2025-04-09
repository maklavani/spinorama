'use client'

import React, { FC, useRef, useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Register GSAP plugin
gsap.registerPlugin(useGSAP)

// Types
import type { SpinoramaProps, SpinoramaSettings } from './index.types'

const Spinorama: FC<SpinoramaProps> = (props: SpinoramaProps) => {
	// Props
	const { className, interval, duration, ease, children, ...otherProps } = props

	// Variables
	const theme = useTheme()
	const itemsInterval = useRef<NodeJS.Timeout | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	// const nextRef = useRef<HTMLButtonElement>(null)
	// const prevRef = useRef<HTMLButtonElement>(null)
	// const thumbnailsRef = useRef<(HTMLButtonElement | null)[]>([])
	const [init, setInit] = useState<boolean>(false)

	// Settings
	const settings: SpinoramaSettings = {
		interval: interval || 10000,
		duration: (duration || 1000) / 1000,
		ease: ease || 'power1.inOut'
	}

	// Callbacks
	const { contextSafe } = useGSAP(
		(_, contextSafe) => {
			// Set Interval
			itemsInterval.current = setInterval(nextItem, settings.interval)

			// Next
			// @ts-ignore
			const onClickNext = contextSafe(nextItem)

			// Prev
			// @ts-ignore
			const onClickPrev = contextSafe(prevItem)

			// Thumbnail
			// @ts-ignore
			const onClickShow = contextSafe(showItem)

			if (containerRef.current) {
				const nextElm = containerRef.current.querySelector('.spinorama-next')
				const prevElm = containerRef.current.querySelector('.spinorama-prev')
				const thumbnailsElm = containerRef.current.querySelectorAll('.spinorama-thumbnail')

				nextElm?.addEventListener('click', onClickNext)
				prevElm?.addEventListener('click', onClickPrev)
				thumbnailsElm.forEach((thumbnail, index) => thumbnail.addEventListener('click', () => onClickShow(index)))
			}

			return () => {
				// Clear Interval
				clearInterval(itemsInterval.current as NodeJS.Timeout)

				// Clear Events
				if (containerRef.current) {
					const nextElm = containerRef.current.querySelector('.spinorama-next')
					const prevElm = containerRef.current.querySelector('.spinorama-prev')
					const thumbnailsElm = containerRef.current.querySelectorAll('.spinorama-thumbnail')

					nextElm?.removeEventListener('click', onClickNext)
					prevElm?.removeEventListener('click', onClickPrev)
					thumbnailsElm.forEach((thumbnail, index) => thumbnail.removeEventListener('click', () => onClickShow(index)))
				}
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

	// Find item position
	const findItemPosition = contextSafe((index: number) => {
		const items = containerRef.current?.querySelectorAll('.spinorama-item')
		const parent = containerRef.current?.querySelector('.spinorama-items')
		let output: number = 0

		if (parent && items) {
			const parentRect = parent.getBoundingClientRect()
			let firstPosition = 0

			items.forEach((item, itemIndex) => {
				if (itemIndex == index) {
					const itemRect = item.getBoundingClientRect()
					let position = 0

					// Fixed position in RTL
					if (theme.direction === 'rtl') position = itemRect.left + itemRect.width - (parentRect.left + parentRect.width)
					else position = itemRect.left - parentRect.left

					// Reset in the middle of an animation
					if (!index) firstPosition = position
					position -= firstPosition

					// Output
					output += position / (parentRect.width || 1)
				}
			})
		}

		return output
	})

	// Animate
	const animateItems = contextSafe((index: number) => {
		const xPercent = findItemPosition(index)

		gsap.to('.spinorama-items', {
			xPercent: -100 * xPercent,
			duration: settings.duration,
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
		itemsInterval.current = setInterval(nextItem, settings.interval)
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
		itemsInterval.current = setInterval(nextItem, settings.interval)
	})

	// Show item
	const showItem = contextSafe((selected: number) => {
		setClassName('selected', selected)
		animateItems(selected)

		// Clear Interval
		clearInterval(itemsInterval.current as NodeJS.Timeout)

		// Set Interval
		itemsInterval.current = setInterval(nextItem, settings.interval)
	})

	useEffect(() => {
		if (containerRef.current && !init) {
			setInit(true)
			setClassName('selected', 0)
		}
	}, [containerRef, init])

	return (
		<Box ref={containerRef} className={`spinorama${className ? ` ${className}` : ''}`} width={1} position="relative" {...otherProps}>
			{children}
		</Box>
	)
}

export default Spinorama

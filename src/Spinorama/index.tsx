'use client'

import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaProps, SpinoramaSettings } from './index.types'

const Spinorama: React.FC<SpinoramaProps> = (props: SpinoramaProps) => {
	// Props
	const { duration, className, children } = props

	// Variables
	const settings: SpinoramaSettings = {
		duration: duration || 10000
	}

	// Callbacks
	const nextItem = React.useCallback(() => {}, [])

	React.useEffect(() => {
		// Call interval
		const interval = setInterval(nextItem, settings.duration)

		// Cleanup effect
		return () => {
			// Clear the interval when the component is unmounted
			clearInterval(interval)
		}
	}, [nextItem, settings.duration])

	return <Box className={`spinorama${className ? ` ${className}` : ''}`}>{children}</Box>
}

export default Spinorama

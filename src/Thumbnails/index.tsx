import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaThumbnailsProps } from './index.types'

const SpinoramaThumbnails: React.FC<SpinoramaThumbnailsProps> = (props: SpinoramaThumbnailsProps) => {
	// Props
	const { justify, reverse, className, children } = props

	// Varaibles
	const justifyContent = !justify || justify === 'center' ? 'center' : justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box className={`spinorama-thumbnails${className ? ` ${className}` : ''}`} display="flex" flexGrow={1} width={1}>
			<Box className="spinorama-thumbnails-wrapper" flexDirection={reverse ? 'row-reverse' : 'row'} justifyContent={justifyContent} display="flex" overflow="hidden">
				{children}
			</Box>
		</Box>
	)
}

export default SpinoramaThumbnails

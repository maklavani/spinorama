import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaThumbnailsProps } from './index.types'

const SpinoramaThumbnails: React.FC<SpinoramaThumbnailsProps> = (props: SpinoramaThumbnailsProps) => {
	// Props
	const { className, children } = props

	return (
		<Grid className={`spinorama-thumbnails${className ? ` ${className}` : ''}`} item flexGrow={1}>
			{children}
		</Grid>
	)
}

export default SpinoramaThumbnails

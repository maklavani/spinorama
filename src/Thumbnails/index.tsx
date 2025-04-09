'use client'

import React, { FC } from 'react'
import { Box, Grid } from '@mui/material'

// Types
import type { SpinoramaThumbnailsProps } from './index.types'

const SpinoramaThumbnails: FC<SpinoramaThumbnailsProps> = (props: SpinoramaThumbnailsProps) => {
	// Props
	const { className, justify, reverse, spacing, children, ...otherProps } = props

	// Varaibles
	const justifyContent = !justify || justify === 'center' ? 'center' : justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box className={`spinorama-thumbnails${className ? ` ${className}` : ''}`} display="flex" flexGrow={1} width={1} {...otherProps}>
			<Grid
				className="spinorama-thumbnails-items"
				container
				flexDirection={reverse ? 'row-reverse' : 'row'}
				flexWrap="nowrap"
				justifyContent={justifyContent}
				columns={12}
				spacing={spacing ? 1 : 0}
				minWidth={1}
				height={1}
			>
				{children}
			</Grid>
		</Box>
	)
}

export default SpinoramaThumbnails

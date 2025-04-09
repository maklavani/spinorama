'use client'

import React, { lazy, FC } from 'react'
import { Box, Grid } from '@mui/material'

// Types
import type { SpinoramaWrapperProps } from './index.types'

// Components
const SpinoramaItem = lazy(() => import('../Item'))

const SpinoramaWrapper: FC<SpinoramaWrapperProps> = (props: SpinoramaWrapperProps) => {
	// Props
	const { className, justify, reverse, spacing, children, ...otherProps } = props

	// Varaibles
	const justifyContent = justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box className={`spinorama-wrapper${className ? ` ${className}` : ''}`} display="flex" width={1} overflow="hidden" {...otherProps}>
			<Grid
				className="spinorama-items"
				container
				flexDirection={reverse ? 'row-reverse' : 'row'}
				flexWrap="nowrap"
				justifyContent={justifyContent}
				columns={12}
				spacing={spacing ? { xs: 1, md: 2 } : 0}
				minWidth={1}
				height={1}
			>
				{children}
			</Grid>
		</Box>
	)
}

export default SpinoramaWrapper

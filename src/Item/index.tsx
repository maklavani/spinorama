'use client'

import React, { FC } from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaItemProps } from './index.types'

const SpinoramaItem: FC<SpinoramaItemProps> = (props: SpinoramaItemProps) => {
	// Props
	const { ref, className, children } = props

	return (
		<Grid ref={ref} item xs={12} flex="0 0 fit-content" {...props} className={`spinorama-item${className ? ` ${className}` : ''}`}>
			{children}
		</Grid>
	)
}

export default SpinoramaItem

'use client'

import React, { FC } from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaButtonsProps } from './index.types'

const SpinoramaButtons: FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { className, children, ...otherProps } = props

	return (
		<Grid className={`spinorama-buttons${className ? ` ${className}` : ''}`} size="grow" width={1} {...otherProps}>
			{children}
		</Grid>
	)
}

export default SpinoramaButtons

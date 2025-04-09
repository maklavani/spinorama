'use client'

import React, { FC } from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaActionsProps } from './index.types'

const SpinoramaActions: FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { className, children, ...otherProps } = props

	return (
		<Box className={`spinorama-actions${className ? ` ${className}` : ''}`} display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...otherProps}>
			{children}
		</Box>
	)
}

export default SpinoramaActions

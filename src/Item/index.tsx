import React, { forwardRef } from 'react'
import { Grid } from '@mui/material'

// Types
import type { ForwardedRef } from 'react'
import type { SpinoramaItemProps } from './index.types'

const SpinoramaItem = forwardRef((props: SpinoramaItemProps, ref: ForwardedRef<SpinoramaItemProps>) => {
	// Props
	const { className, children } = props

	return (
		<Grid item xs={12} flex="0 0 fit-content" {...props} className={`spinorama-item${className ? ` ${className}` : ''}`}>
			{children}
		</Grid>
	)
})

export default SpinoramaItem

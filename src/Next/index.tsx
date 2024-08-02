'use client'

import React, { forwardRef } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { ForwardedRef } from 'react'
import type { SpinoramaNextProps } from './index.types'

const SpinoramaNext = forwardRef((props: SpinoramaNextProps, ref: ForwardedRef<SpinoramaNextProps>) => {
	// Props
	const { buttonref, className } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-next${className ? ` ${className}` : ''}`}>
			<IconButton ref={buttonref} color="primary" sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
			</IconButton>
		</Grid>
	)
})

export default SpinoramaNext

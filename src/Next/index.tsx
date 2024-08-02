'use client'

import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaNextProps } from './index.types'

const SpinoramaNext: FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { ref, buttonref, className } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid ref={ref} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-next${className ? ` ${className}` : ''}`}>
			<IconButton ref={buttonref} color="primary" sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
			</IconButton>
		</Grid>
	)
}

export default SpinoramaNext

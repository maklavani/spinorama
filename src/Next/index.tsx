'use client'

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaNextProps } from './index.types'

const SpinoramaNext: React.FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { className, onClick } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-next${className ? ` ${className}` : ''}`}>
			<IconButton color="primary" onClick={onClick} sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
			</IconButton>
		</Grid>
	)
}

export default SpinoramaNext

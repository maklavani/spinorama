'use client'

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaNextProps } from './index.types'

const SpinoramaNext: React.FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { className } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid className={`spinorama-next${className ? ` ${className}` : ''}`} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props}>
			<IconButton color="primary" sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
			</IconButton>
		</Grid>
	)
}

export default SpinoramaNext

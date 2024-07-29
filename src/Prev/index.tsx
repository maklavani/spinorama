'use client'

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaPrevProps } from './index.types'

const SpinoramaPrev: React.FC<SpinoramaPrevProps> = (props: SpinoramaPrevProps) => {
	// Props
	const { className } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid className={`spinorama-next${className ? ` ${className}` : ''}`} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props}>
			<IconButton color="primary" sx={{ color: 'primary.dark' }}>
				{theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
			</IconButton>
		</Grid>
	)
}

export default SpinoramaPrev

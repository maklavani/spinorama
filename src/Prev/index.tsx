'use client'

import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaPrevProps } from './index.types'

// Helpers
import { GenerateLayout } from '../Helpers/generate-layout'

const SpinoramaPrev: FC<SpinoramaPrevProps> = (props: SpinoramaPrevProps) => {
	// Props
	const { className, layout, showOnHover, sx, children, ...otherProps } = props

	// Variables
	const theme = useTheme()

	const layoutStyles = GenerateLayout({
		theme,
		layout,
		rightHandSide: theme.direction === 'rtl'
	})

	return (
		<Grid
			className={`spinorama-btn spinorama-prev${className ? ` ${className}` : ''}`}
			flex="0 0 fit-content"
			display="inline-flex"
			justifyContent="center"
			zIndex={1}
			sx={{
				...layoutStyles,
				...(showOnHover && {
					visibility: { md: 'hidden' },
					opacity: { md: 0 },
					transition: 'opacity .3s ease',
					'.spinorama:hover &': {
						visibility: { md: 'visible' },
						opacity: { md: 1 }
					}
				}),
				...sx
			}}
			{...otherProps}
		>
			{children ?? (
				<IconButton color="primary" sx={{ color: 'primary.dark' }}>
					{theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaPrev

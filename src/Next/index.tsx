'use client'

import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { SpinoramaNextProps } from './index.types'

// Helpers
import { GenerateLayout } from '../Helpers/generate-layout.tsx'

const SpinoramaNext: FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { className, layout, showOnHover, sx, children, ...otherProps } = props

	// Variables
	const theme = useTheme()

	const layoutStyles = GenerateLayout({
		theme,
		layout,
		rightHandSide: theme.direction === 'ltr'
	})

	return (
		<Grid
			className={`spinorama-btn spinorama-next${className ? ` ${className}` : ''}`}
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
					{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaNext

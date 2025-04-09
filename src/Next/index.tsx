'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaNextProps } from './index.types'

// Helpers
import { GenerateLayout } from '../Helpers/generate-layout'

const SpinoramaNext: FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { ref, className, buttonRef, layout, showOnHover, sx, children, ...otherProps } = props

	// Variables
	const theme = useTheme()

	const layoutStyles = GenerateLayout({
		theme,
		layout,
		rightHandSide: theme.direction === 'ltr'
	})

	return (
		<Grid
			ref={ref}
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
			{Children.count(children) ? (
				Children.map(children, child => {
					if (isValidElement(child)) return cloneElement(child as ReactElement, { ref: buttonRef })
					else return child
				})
			) : (
				<IconButton ref={buttonRef} color="primary" sx={{ color: 'primary.dark' }}>
					{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaNext

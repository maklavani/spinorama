'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaPrevProps } from './index.types'

const SpinoramaPrev: FC<SpinoramaPrevProps> = (props: SpinoramaPrevProps) => {
	// Props
	const { ref, buttonref, className, children } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid ref={ref} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-prev${className ? ` ${className}` : ''}`}>
			{Children.count(children) ? (
				Children.map(children, child => {
					if (isValidElement(child)) return cloneElement(child as ReactElement, { ref: buttonref })
					else return child
				})
			) : (
				<IconButton ref={buttonref} color="primary" sx={{ color: 'primary.dark' }}>
					{theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaPrev

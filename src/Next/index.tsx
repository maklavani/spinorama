'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaNextProps } from './index.types'

const SpinoramaNext: FC<SpinoramaNextProps> = (props: SpinoramaNextProps) => {
	// Props
	const { ref, buttonref, className, children } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid ref={ref} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-next${className ? ` ${className}` : ''}`}>
			{Children.count(children) ? (
				Children.map(children, child => {
					console.log('child', child)

					if (isValidElement(child)) return cloneElement(child as ReactElement, { ref: buttonref })
					else return child
				})
			) : (
				<IconButton ref={buttonref} color="primary" sx={{ color: 'primary.dark' }}>
					{theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaNext

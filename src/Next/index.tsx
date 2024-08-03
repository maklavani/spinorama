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
	const { ref, buttonref, layout, className, children } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid
			ref={ref}
			item
			flex="0 0 fit-content"
			display="inline-flex"
			justifyContent="center"
			position={layout ? 'absolute' : 'relative'}
			top={layout && (['top-left', 'top-center', 'top-right'].includes(layout) ? 0 : ['center-left', 'center-right'].includes(layout) ? '50%' : 'inherit')}
			right={layout && (['top-right', 'center-right', 'bottom-right'].includes(layout) ? 0 : 'inherit')}
			bottom={layout && (['bottom-left', 'bottom-center', 'bottom-right'].includes(layout) ? 0 : 'inherit')}
			left={layout && (['top-left', 'center-left', 'bottom-left'].includes(layout) ? 0 : ['top-center', 'bottom-center'].includes(layout) ? '50%' : 'inherit')}
			sx={{
				transform: `${layout && ['top-center', 'bottom-center'].includes(layout) ? `translateX(-50%) ` : ''}translateY(${
					layout && ['bottom-left', 'bottom-center', 'bottom-right'].includes(layout) ? '50%' : '-50%'
				})`
			}}
			{...props}
			className={`spinorama-btn spinorama-next${className ? ` ${className}` : ''}`}
		>
			{Children.count(children) ? (
				Children.map(children, child => {
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

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
	const { ref, className, buttonRef, layout, showOnHover, sx, children, ...otherProps } = props

	// Variables
	const theme = useTheme()

	return (
		<Grid
			ref={ref}
			className={`spinorama-btn spinorama-prev${className ? ` ${className}` : ''}`}
			item
			flex="0 0 fit-content"
			display="inline-flex"
			justifyContent="center"
			position={layout ? 'absolute' : 'inherit'}
			top={layout && (['top-left', 'top-center', 'top-right'].includes(layout) ? 0 : ['center-left', 'center-right'].includes(layout) ? '50%' : 'inherit')}
			right={layout && (['top-right', 'center-right', 'bottom-right'].includes(layout) ? 0 : 'inherit')}
			bottom={layout && (['bottom-left', 'bottom-center', 'bottom-right'].includes(layout) ? 0 : 'inherit')}
			left={layout && (['top-left', 'center-left', 'bottom-left'].includes(layout) ? 0 : ['top-center', 'bottom-center'].includes(layout) ? '50%' : 'inherit')}
			zIndex={1}
			sx={{
				...(showOnHover && {
					visibility: { md: 'hidden' },
					opacity: { md: 0 },
					transition: 'opacity .3s ease',
					'.spinorama:hover &': {
						visibility: { md: 'visible' },
						opacity: { md: 1 }
					}
				}),
				transform: `${layout && ['top-center', 'bottom-center'].includes(layout) ? `translateX(-50%) ` : ''}translateY(${
					layout && ['bottom-left', 'bottom-center', 'bottom-right'].includes(layout) ? '50%' : '-50%'
				})`,
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
					{theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
				</IconButton>
			)}
		</Grid>
	)
}

export default SpinoramaPrev

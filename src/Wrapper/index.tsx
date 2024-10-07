'use client'

import React, { lazy, FC, Children, isValidElement, cloneElement } from 'react'
import { Box, Grid2 as Grid } from '@mui/material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaWrapperProps } from './index.types'
import type { SpinoramaItemProps } from '../Item/index.types'

// Components
const SpinoramaItem = lazy(() => import('../Item'))

const SpinoramaWrapper: FC<SpinoramaWrapperProps> = (props: SpinoramaWrapperProps) => {
	// Props
	const { ref, className, justify, reverse, spacing, children, ...otherProps } = props

	// Varaibles
	const justifyContent = justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box ref={ref} className={`spinorama-wrapper${className ? ` ${className}` : ''}`} display="flex" width={1} overflow="hidden" {...otherProps}>
			<Grid
				className="spinorama-items"
				container
				flexDirection={reverse ? 'row-reverse' : 'row'}
				flexWrap="nowrap"
				justifyContent={justifyContent}
				columns={12}
				spacing={spacing ? { xs: 1, md: 2 } : 0}
				minWidth={1}
				height="100%"
			>
				{Children.map(children, (child, index) => {
					if (isValidElement(child)) {
						// Clone element
						if (child.type.toString().indexOf('spinorama-item') > -1) return cloneElement(child as ReactElement<SpinoramaItemProps>)
						else return <SpinoramaItem key={index}>{child}</SpinoramaItem>
					} else return child
				})}
			</Grid>
		</Box>
	)
}

export default SpinoramaWrapper

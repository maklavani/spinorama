'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { Box, Grid2 as Grid } from '@mui/material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaThumbnailsProps } from './index.types'
import type { SpinoramaThumbnailProps } from '../Thumbnail/index.types'

const SpinoramaThumbnails: FC<SpinoramaThumbnailsProps> = (props: SpinoramaThumbnailsProps) => {
	// Props
	const { ref, className, justify, reverse, spacing, thumbnailsRef, children, ...otherProps } = props

	// Varaibles
	const justifyContent = !justify || justify === 'center' ? 'center' : justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box ref={ref} className={`spinorama-thumbnails${className ? ` ${className}` : ''}`} display="flex" flexGrow={1} width={1} {...otherProps}>
			<Grid
				className="spinorama-thumbnails-items"
				container
				flexDirection={reverse ? 'row-reverse' : 'row'}
				flexWrap="nowrap"
				justifyContent={justifyContent}
				columns={12}
				spacing={spacing ? 1 : 0}
				minWidth={1}
				height="100%"
			>
				{Children.map(children, child => {
					if (isValidElement(child)) {
						// Type
						const childType = child.type.toString()

						// Clone element
						if (childType.indexOf('spinorama-thumbnail') > -1) {
							return cloneElement(child as ReactElement<SpinoramaThumbnailProps>, {
								thumbnailsRef: thumbnailsRef
							})
						} else return child
					} else return child
				})}
			</Grid>
		</Box>
	)
}

export default SpinoramaThumbnails

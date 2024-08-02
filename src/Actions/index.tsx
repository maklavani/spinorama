'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { Box } from '@mui/material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaActionsProps } from './index.types'
import type { SpinoramaButtonsProps } from '../Buttons/index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'
import type { SpinoramaThumbnailsProps } from '../Thumbnails/index.types'
import type { SpinoramaThumbnailProps } from '../Thumbnail/index.types'

const SpinoramaActions: FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { ref, nextref, prevref, thumbnailsref, className, children } = props

	return (
		<Box ref={ref} display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...props} className={`spinorama-actions${className ? ` ${className}` : ''}`}>
			{Children.map(children, child => {
				if (isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-buttons') > -1)
						return cloneElement(child as ReactElement<SpinoramaButtonsProps>, {
							nextref: nextref,
							prevref: prevref
						})
					else if (childType.indexOf('spinorama-next') > -1)
						return cloneElement(child as ReactElement<SpinoramaNextProps>, {
							buttonref: nextref
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return cloneElement(child as ReactElement<SpinoramaPrevProps>, {
							buttonref: prevref
						})
					else if (childType.indexOf('spinorama-thumbnails') > -1)
						return cloneElement(child as ReactElement<SpinoramaThumbnailsProps>, {
							thumbnailsref: thumbnailsref
						})
					else if (childType.indexOf('spinorama-thumbnail') > -1)
						return cloneElement(child as ReactElement<SpinoramaThumbnailProps>, {
							thumbnailsref: thumbnailsref
						})
					else return cloneElement(child)
				} else return child
			})}
		</Box>
	)
}

export default SpinoramaActions

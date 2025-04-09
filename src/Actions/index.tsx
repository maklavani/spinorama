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
	const { className, children, ...otherProps } = props

	return (
		<Box className={`spinorama-actions${className ? ` ${className}` : ''}`} display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...otherProps}>
			{Children.map(children, child => {
				if (isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-buttons') > -1) return cloneElement(child as ReactElement<SpinoramaButtonsProps>)
					else if (childType.indexOf('spinorama-next') > -1) return cloneElement(child as ReactElement<SpinoramaNextProps>)
					else if (childType.indexOf('spinorama-prev') > -1) return cloneElement(child as ReactElement<SpinoramaPrevProps>)
					else if (childType.indexOf('spinorama-thumbnails') > -1) return cloneElement(child as ReactElement<SpinoramaThumbnailsProps>)
					else if (childType.indexOf('spinorama-thumbnail') > -1) return cloneElement(child as ReactElement<SpinoramaThumbnailProps>)
					else return child
				} else return child
			})}
		</Box>
	)
}

export default SpinoramaActions

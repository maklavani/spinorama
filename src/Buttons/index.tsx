'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { Grid } from '@mui/material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaButtonsProps } from './index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'

const SpinoramaButtons: FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { ref, className, nextRef, prevRef, children, ...otherProps } = props

	return (
		<Grid ref={ref} className={`spinorama-buttons${className ? ` ${className}` : ''}`} item flexGrow={1} width={1} {...otherProps}>
			{Children.map(children, child => {
				if (isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-next') > -1)
						return cloneElement(child as ReactElement<SpinoramaNextProps>, {
							buttonRef: nextRef
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return cloneElement(child as ReactElement<SpinoramaPrevProps>, {
							buttonRef: prevRef
						})
					else return child
				} else return child
			})}
		</Grid>
	)
}

export default SpinoramaButtons

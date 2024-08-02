import React, { forwardRef, Children, isValidElement, cloneElement } from 'react'
import { Grid } from '@mui/material'

// Types
import type { ForwardedRef, ReactElement } from 'react'
import type { SpinoramaButtonsProps } from './index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'

const SpinoramaButtons = forwardRef((props: SpinoramaButtonsProps) => {
	// Props
	const { className, nextref, prevref, children } = props

	return (
		<Grid item flexGrow={1} width={1} {...props} className={`spinorama-buttons${className ? ` ${className}` : ''}`}>
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-next') > -1)
						return cloneElement(child as ReactElement<SpinoramaNextProps>, {
							buttonref: nextref
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return cloneElement(child as ReactElement<SpinoramaPrevProps>, {
							buttonref: prevref
						})
					else return cloneElement(child)
				} else return child
			})}
		</Grid>
	)
})

export default SpinoramaButtons

import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaButtonsProps } from './index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'

const SpinoramaButtons: React.FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { className, nextref, prevref, children } = props

	return (
		<Grid item flexGrow={1} width={1} {...props} className={`spinorama-buttons${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-next') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaNextProps>, {
							buttonref: nextref
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaPrevProps>, {
							buttonref: prevref
						})
					else return React.cloneElement(child)
				} else return child
			})}
		</Grid>
	)
}

export default SpinoramaButtons

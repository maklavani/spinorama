import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaActionsProps } from './index.types'
import type { SpinoramaButtonsProps } from '../Buttons/index.types'
import type { SpinoramaNextProps } from '../Next/index.types'
import type { SpinoramaPrevProps } from '../Prev/index.types'
import type { SpinoramaThumbnailsProps } from '../Thumbnails/index.types'
import type { SpinoramaThumbnailProps } from '../Thumbnail/index.types'

const SpinoramaActions: React.FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { nextref, prevref, className, children } = props

	return (
		<Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...props} className={`spinorama-actions${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					// Type
					const childType = child.type.toString()

					// Clone element
					if (childType.indexOf('spinorama-buttons') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaButtonsProps>, {
							nextref: nextref,
							prevref: prevref
						})
					else if (childType.indexOf('spinorama-next') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaNextProps>, {
							buttonref: nextref
						})
					else if (childType.indexOf('spinorama-prev') > -1)
						return React.cloneElement(child as React.ReactElement<SpinoramaPrevProps>, {
							buttonref: prevref
						})
					else if (childType.indexOf('spinorama-thumbnails') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailsProps>, {})
					else if (childType.indexOf('spinorama-thumbnail') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailProps>, {})
					else return React.cloneElement(child)
				} else return child
			})}
		</Box>
	)
}

export default SpinoramaActions

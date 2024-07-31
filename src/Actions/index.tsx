import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaActionsProps } from './index.types'

const SpinoramaActions: React.FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { selected, className, children } = props

	return (
		<Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...props} className={`spinorama-actions${className ? ` ${className}` : ''}`}>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					// Check is thumbnails
					const isThumbnails = child.type.toString().indexOf('spinorama-thumbnails') > -1

					// Clone element
					return isThumbnails ? React.cloneElement(child as React.ReactElement<any>, { selected }) : child
				} else return child
			})}
		</Box>
	)
}

export default SpinoramaActions

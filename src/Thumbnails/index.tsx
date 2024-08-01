import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaThumbnailsProps } from './index.types'
import type { SpinoramaThumbnailProps } from '../Thumbnail/index.types'

const SpinoramaThumbnails: React.FC<SpinoramaThumbnailsProps> = (props: SpinoramaThumbnailsProps) => {
	// Props
	const { justify, reverse, className, children } = props

	// Varaibles
	const justifyContent = !justify || justify === 'center' ? 'center' : justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box display="flex" flexGrow={1} width={1} {...props} className={`spinorama-thumbnails${className ? ` ${className}` : ''}`}>
			<Box
				className="spinorama-thumbnails-wrapper"
				flexDirection={reverse ? 'row-reverse' : 'row'}
				justifyContent={justifyContent}
				display="flex"
				minWidth={1}
				overflow="hidden"
			>
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						// Type
						const childType = child.type.toString()

						// Clone element
						if (childType.indexOf('spinorama-next') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaThumbnailProps>, {})
						else return React.cloneElement(child)
					} else return child
				})}
			</Box>
		</Box>
	)
}

export default SpinoramaThumbnails

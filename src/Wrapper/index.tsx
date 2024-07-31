import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaWrapperProps } from './index.types'

// Components
const SpinoramaItem = React.lazy(() => import('../Item'))

const SpinoramaWrapper: React.FC<SpinoramaWrapperProps> = (props: SpinoramaWrapperProps) => {
	// Props
	const { justify, reverse, className, children } = props

	// Varaibles
	const justifyContent = justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box display="flex" width={1} {...props} className={`spinorama-slidehow${className ? ` ${className}` : ''}`}>
			<Box
				className="spinorama-slidehow-wrapper"
				flexDirection={reverse ? 'row-reverse' : 'row'}
				justifyContent={justifyContent}
				display="flex"
				minWidth={1}
				height="100%"
				overflow="hidden"
			>
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						// Get element
						const elm = React.cloneElement(child)

						// Check is item
						const isItem = child.type.toString().indexOf('spinorama-item') > -1

						return isItem ? elm : <SpinoramaItem key={index}>{elm}</SpinoramaItem>
					} else return null
				})}
			</Box>
		</Box>
	)
}

export default SpinoramaWrapper

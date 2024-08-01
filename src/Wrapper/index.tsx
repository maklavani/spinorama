import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaWrapperProps } from './index.types'
import type { SpinoramaItemProps } from '../Item/index.types'

// Components
const SpinoramaItem = React.lazy(() => import('../Item'))

const SpinoramaWrapper: React.FC<SpinoramaWrapperProps> = (props: SpinoramaWrapperProps) => {
	// Props
	const { justify, reverse, className, children } = props

	// Varaibles
	const justifyContent = justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box display="flex" width={1} overflow="hidden" {...props} className={`spinorama-wrapper${className ? ` ${className}` : ''}`}>
			<Box className="spinorama-items" flexDirection={reverse ? 'row-reverse' : 'row'} justifyContent={justifyContent} display="flex" minWidth={1} height="100%">
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						// Clone element
						if (child.type.toString().indexOf('spinorama-item') > -1) return React.cloneElement(child as React.ReactElement<SpinoramaItemProps>, {})
						else return <SpinoramaItem key={index}>{child}</SpinoramaItem>
					} else return child
				})}
			</Box>
		</Box>
	)
}

export default SpinoramaWrapper

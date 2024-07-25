import * as React from 'react'
import { Box, Grid } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './Slideshow.types'

// Components
const SpinoramaItem = React.lazy(() => import('../Item').then(module => ({ default: module.SpinoramaItem })))

const SpinoramaSlideshow: React.FC<SpinoramaSlideshowProps> = (props: SpinoramaSlideshowProps) => {
	// Props
	const { justify, reverse, className, children } = props

	// Varaibles
	const justifyContent = justify === 'end' ? 'flex-end' : 'flex-start'

	return (
		<Box className={`spinorama-slidehow${className ? ` ${className}` : ''}`} display="flex" width={1}>
			<Box className="spinorama-slidehow-wrapper" flexDirection={reverse ? 'row-reverse' : 'row'} justifyContent={justifyContent} display="flex" overflow="hidden">
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

export { SpinoramaSlideshow }

import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './Slideshow.types'

// Components
const SpinoramaItem = React.lazy(() => import('../Item').then((module) => ({ default: module.SpinoramaItem })))

const SpinoramaSlideshow: React.FC<SpinoramaSlideshowProps> = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className, children } = props

	return (
		<Box
			className={`spinorama-slidehow${className ? ` ${className}` : ''}`}
			display="flex"
			width={1}
			overflow="hidden"
			sx={{
				tabSize: React.Children.count(children) ?? 0
			}}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					// Get element
					const elm = React.cloneElement(child)

					// Check is item
					const isItem = child.type.toString().indexOf('spinorama-slidehow-item') > -1

					return isItem ? elm : <SpinoramaItem key={index}>{elm}</SpinoramaItem>
				} else return null
			})}
		</Box>
	)
}

export { SpinoramaSlideshow }

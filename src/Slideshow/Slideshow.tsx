import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './Slideshow.types'

const SpinoramaSlideshow: React.FC<SpinoramaSlideshowProps> = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className, children } = props

	// Check if children is defined
	if (!children) return null

	return (
		<Grid
			className={`spinorama-slidehow${className ? ` ${className}` : ''}`}
			width={1}
			overflow="hidden"
			sx={{
				tabSize: React.Children.count(children) ?? 0
			}}>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) return null

				return (
					<Grid key={index} className="spinorama-slidehow-item" flex="0 0 100%">
						{React.cloneElement(child)}
					</Grid>
				)
			})}
		</Grid>
	)
}

export { SpinoramaSlideshow }

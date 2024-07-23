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
		<Grid className={`spinorama-slidehow${className ? ` ${className}` : ''}`} container>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) return null

				return (
					<Grid key={index} item xs={12}>
						{React.cloneElement(child)}
					</Grid>
				)
			})}
		</Grid>
	)
}

export { SpinoramaSlideshow }

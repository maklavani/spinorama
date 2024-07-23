import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './Slideshow.types'

const SpinoramaSlideshow: React.FC<SpinoramaSlideshowProps> = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className, children } = props

	return (
		<Grid className={`spinorama-slidehow${className ? ` ${className}` : ''}`} container>
			{children &&
				React.Children.map(children, (child, index) => {
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

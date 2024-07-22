import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import { SpinoramaSlideshowProps } from './SpinoramaSlideshow.types'

const SpinoramaSlideshow: React.FC = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className } = props

	return <Grid className={className}>SpinoramaSlideshow</Grid>
}

export { SpinoramaSlideshow }

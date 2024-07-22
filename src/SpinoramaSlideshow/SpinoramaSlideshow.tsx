import { FC } from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './SpinoramaSlideshow.d'

const SpinoramaSlideshow: FC = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className } = props

	return <Grid className={className}>SpinoramaSlideshow</Grid>
}

export { SpinoramaSlideshow }

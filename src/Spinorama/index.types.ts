// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaSettings = {
	/**
	 * The duration of the transition between slides.
	 *
	 * @default 10000
	 */
	duration?: number
}

export type SpinoramaProps = SpinoramaSettings & BoxProps & {}

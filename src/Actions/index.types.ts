// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaActionsProps = BoxProps & {
	/**
	 * Determines the currently selected slide
	 * A number representing the index of the selected slide
	 * If not provided, the first slide will be selected
	 */
	selected?: number
}

// Types
import type { GridProps } from '@mui/material'

export type SpinoramaButtonsProps = GridProps & {
	/**
	 * Callback function that will be invoked when the next button is clicked
	 */
	nextOnClick?: () => void

	/**
	 * Callback function that will be invoked when the previous button is clicked
	 */
	prevOnClick?: () => void
}

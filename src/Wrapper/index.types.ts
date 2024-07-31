// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaWrapperProps = BoxProps & {
	/**
	 * Determines how the slides are aligned.
	 * Available options are:
	 * - 'start': aligns the slides to the left (or top if `direction` is 'column');
	 * - 'end': aligns the slides to the right (or bottom if `direction` is 'column');
	 *
	 * @default 'start'
	 */
	justify?: 'start' | 'end'

	/**
	 * Determines the direction of the slideshow.
	 * When `true`, the slides will be displayed in reverse order.
	 *
	 * @default false
	 */
	reverse?: boolean

	/**
	 * Determines the currently selected slide
	 * A number representing the index of the selected slide
	 * If not provided, the first slide will be selected
	 */
	selected?: number
}

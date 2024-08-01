import * as React from 'react'

// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaThumbnailsProps = BoxProps & {
	/**
	 * Determines how the slides are aligned.
	 * Available options are:
	 * - 'start': aligns the slides to the left (or top if `direction` is 'column');
	 * - 'center': aligns the slides to center;
	 * - 'end': aligns the slides to the right (or bottom if `direction` is 'column');
	 *
	 * @default 'start'
	 */
	justify?: 'start' | 'center' | 'end'

	/**
	 * Determines the direction of the slideshow.
	 * When `true`, the slides will be displayed in reverse order.
	 *
	 * @default false
	 */
	reverse?: boolean

	/**
	 * A reference to the array of thumbnail button elements
	 */
	thumbnailsref?: React.MutableRefObject<(HTMLButtonElement | null)[]>
}

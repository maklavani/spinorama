// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaActionsProps = BoxProps & {
	/**
	 * A reference to the next button element
	 */
	nextRef?: React.Ref<HTMLButtonElement>

	/**
	 * A reference to the prev button element
	 */
	prevRef?: React.Ref<HTMLButtonElement>

	/**
	 * A reference to the array of thumbnail button elements
	 */
	thumbnailsRef?: React.MutableRefObject<(HTMLButtonElement | null)[]>
}

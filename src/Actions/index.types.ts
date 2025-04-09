// Types
import type { Ref } from 'react'
import type { BoxProps } from '@mui/material'

export type SpinoramaActionsProps = BoxProps & {
	/**
	 * A reference to the next button element
	 */
	nextRef?: Ref<HTMLButtonElement>

	/**
	 * A reference to the prev button element
	 */
	prevRef?: Ref<HTMLButtonElement>

	/**
	 * A reference to the array of thumbnail button elements
	 */
	thumbnailsRef?: Ref<(HTMLButtonElement | null)[]>
}

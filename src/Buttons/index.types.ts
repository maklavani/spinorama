// Types
import type { GridProps } from '@mui/material'

export type SpinoramaButtonsProps = GridProps & {
	/**
	 * A reference to the next button element
	 */
	nextRef?: React.Ref<HTMLButtonElement>

	/**
	 * A reference to the prev button element
	 */
	prevRef?: React.Ref<HTMLButtonElement>
}

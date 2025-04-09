// Types
import type { Ref } from 'react'
import type { GridProps } from '@mui/material'

export type SpinoramaButtonsProps = GridProps & {
	/**
	 * A reference to the next button element
	 */
	nextRef?: Ref<HTMLButtonElement>

	/**
	 * A reference to the prev button element
	 */
	prevRef?: Ref<HTMLButtonElement>
}

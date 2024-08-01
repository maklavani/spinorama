// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaActionsProps = BoxProps & {
	/**
	 * A reference to the next button element
	 */
	nextref?: React.Ref<HTMLButtonElement>

	/**
	 * A reference to the prev button element
	 */
	prevref?: React.Ref<HTMLButtonElement>
}

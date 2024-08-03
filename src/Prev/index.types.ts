// Types
import type { GridProps } from '@mui/material'

export type SpinoramaPrevProps = GridProps & {
	/**
	 * A reference to the button element
	 */
	buttonref?: React.Ref<HTMLButtonElement>

	/**
	 * Defines the positioning of the button component
	 * @default undefined
	 */
	layout?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | undefined
}

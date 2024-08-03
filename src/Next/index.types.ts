// Types
import type { GridProps } from '@mui/material'

export type SpinoramaNextProps = GridProps & {
	/**
	 * A reference to the button element
	 */
	buttonRef?: React.Ref<HTMLButtonElement>

	/**
	 * Defines the positioning of the button component
	 * @default undefined
	 */
	layout?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | undefined

	/**
	 * Changes the visibility of the button component based on whether the parent element is being hovered over or not
	 * This feature only works in desktop mode
	 *
	 * @default false
	 */
	showOnHover?: boolean
}

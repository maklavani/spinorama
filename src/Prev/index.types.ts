// Types
import type { ResponsiveStyleValue } from '@mui/system'
import type { GridProps } from '@mui/material'
import type { LayoutPositions } from '../Helpers/generate-layout.types'

export type SpinoramaPrevProps = GridProps & {
	/**
	 * A reference to the button element
	 */
	buttonRef?: React.Ref<HTMLButtonElement>

	/**
	 * Defines the positioning of the button component
	 *
	 * @default undefined
	 */
	layout?: ResponsiveStyleValue<LayoutPositions> | undefined

	/**
	 * Changes the visibility of the button component based on whether the parent element is being hovered over or not
	 * This feature only works in desktop mode
	 *
	 * @default false
	 */
	showOnHover?: boolean
}

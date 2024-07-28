// Types
import type { GridProps } from '@mui/material/Grid'

export type SpinoramaThumbnailDotProps = GridProps & {
	/**
	 * The class name of the component.
	 * Use this prop when you want to style the component with a className.
	 */
	className?: string

	/**
	 * Indicates whether the dot is currently active.
	 * Use this prop to style the component when it represents the active thumbnail.
	 * @default false
	 */
	active?: boolean
}

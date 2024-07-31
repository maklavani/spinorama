// Types
import type { GridProps } from '@mui/material'

export type SpinoramaThumbnailDotProps = GridProps & {
	/**
	 * Indicates whether the dot is currently selected
	 * Use this prop to style the component when it represents the selected thumbnail
	 * @default false
	 */
	selected?: boolean
}

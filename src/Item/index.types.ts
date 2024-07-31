// Types
import type { GridProps } from '@mui/material'

export type SpinoramaItemProps = GridProps & {
	/**
	 * Indicates whether the item is currently selected
	 * Use this prop to style the component when it represents the selected item
	 * @default false
	 */
	selected?: boolean
}

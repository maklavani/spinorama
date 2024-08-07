// Types
import type { GridProps } from '@mui/material'

export type SpinoramaThumbnailProps = GridProps & {
	/**
	 * A reference to the array of thumbnail button elements
	 */
	thumbnailsRef?: React.MutableRefObject<(HTMLButtonElement | null)[]>
}

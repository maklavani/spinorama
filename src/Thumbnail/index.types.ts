// Types
import type { Ref } from 'react'
import type { GridProps } from '@mui/material'

export type SpinoramaThumbnailProps = GridProps & {
	/**
	 * A reference to the array of thumbnail button elements
	 */
	thumbnailsRef?: Ref<(HTMLButtonElement | null)[]>
}

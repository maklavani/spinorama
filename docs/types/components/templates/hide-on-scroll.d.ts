// Types
import type { ReactElement } from 'react'

export type HideOnScrollProps = {
	children: ReactElement
	window?: () => Window
	onlyMobile?: boolean
	onlyDesktop?: boolean
}

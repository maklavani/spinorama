// Types
import type { ReactNode } from 'react'

export type LayoutProps = Readonly<{
	children: ReactNode
	params?: {
		lng: string
	}
}>

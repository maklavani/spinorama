// Types
import type { ReactNode } from 'react'

export type LayoutProps = Readonly<{
	params?: { lng: string }
	children?: ReactNode
}>

// Types
import type { ReactNode } from 'react'

export type LayoutProps = ReadOnly<{
	params: Promise<{ lng: string }>
	children: ReactNode
}>

// Types
import type { ReactNode } from 'react'

export type DocsLayoutProps = Readonly<{
	children: ReactNode
	params?: {
		lng: string
		slug: string[]
	}
}>

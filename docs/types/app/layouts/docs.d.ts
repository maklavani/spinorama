// Types
import type { ReactNode } from 'react'

export type DocsLayoutProps = Readonly<{
	params: Promise<{
		lng: string
		slug: string[]
	}>
	children: ReactNode
}>

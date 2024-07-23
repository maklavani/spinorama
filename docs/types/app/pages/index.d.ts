// Types
import type { ReactNode } from 'react'

export type PageProps = Readonly<{
	children?: ReactNode
	params?: {
		lng: string
	}
}>

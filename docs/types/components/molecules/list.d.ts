// Types
import type { ReactNode } from 'react'

export type ListItemProp = {
	title?: string
	link?: string
	icon?: ReactNode
	iconColor?: string
	children?: ListItem[]
	onClick?: () => void
}

export type ListProps = {
	lng: string
	items: ListItemProp[]
	level?: number
}

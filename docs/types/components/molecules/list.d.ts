// Types
import type { ReactNode } from 'react'

export type ListItemProps = {
	title?: string
	link?: string
	linkType?: 'next' | 'mui'
	icon?: ReactNode
	iconColor?: string
	children?: ListItem[]
	onClick?: () => void
}

export type StyledListItemButtonProps = {
	lng: string
	item: ListItemProps
	level?: number
}

export type ListProps = {
	lng: string
	items: ListItemProps[]
	level?: number
}

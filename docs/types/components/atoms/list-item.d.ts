// Types
import type { ReactNode } from 'react'

export type LinkItemProps = {
	parent?: string
	title?: string
	link?: string
	linkType?: 'next' | 'mui'
	icon?: ReactNode
	iconColor?: string
	endIcon?: ReactNode
	children?: LinkItemProps[]
	onClick?: () => void
}

export type ListItemProps = {
	lng: string
	item: LinkItemProps
	showItem: boolean
	level?: number
}

export type ListProps = {
	lng: string
	items: LinkItemProps[]
	parent?: string
	level?: number
}

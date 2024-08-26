// Types
import type { ReactNode } from 'react'
import type { LinkItemProps } from '@/types/components/atoms/list-item'

export type ListProps = {
	lng: string
	items: LinkItemProps[]
	parent?: string
	level?: number
}

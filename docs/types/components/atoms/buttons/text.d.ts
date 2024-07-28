// Types
import type { ReactNode } from 'react'

export type TextButtonProps = {
	lng?: string
	title: string
	startIcon?: ReactNode
	endIcon?: ReactNode
	color?: string
	bordercolor?: string
	onClick?: () => void
}

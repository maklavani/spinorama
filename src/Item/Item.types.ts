import * as React from 'react'

// Types
import type { GridProps } from '@mui/material/Grid'

export type SpinoramaItemProps = GridProps & {
	/**
	 * The class name of the component.
	 * Use this prop when you want to style the component with a className.
	 */
	className?: string

	/**
	 * Children elements to be rendered inside the component.
	 * Use this prop when you want to pass components or elements as children to the component.
	 */
	children?: React.ReactNode
}

import * as React from 'react'

export type SpinoramaSettings = {
	/**
	 * The duration of the transition between slides.
	 *
	 * @default 10000
	 */
	duration?: number
}

export type SpinoramaProps = SpinoramaSettings & {
	/**
	 * The class name of the component.
	 * Use this prop when you want to style the component with a className.
	 *
	 */
	className?: string

	/**
	 * Children elements to be rendered inside the component.
	 * Use this prop when you want to pass components or elements as children to the component.
	 */
	children?: React.ReactNode
}

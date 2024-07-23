import * as React from 'react'

export type SpinoramaSlideshowProps = {
	/**
	 * Determines how the slides are aligned.
	 * Available options are:
	 * - 'start': aligns the slides to the left (or top if `direction` is 'column');
	 * - 'end': aligns the slides to the right (or bottom if `direction` is 'column');
	 * - 'center': aligns the slides to the center.
	 *
	 * @default 'start'
	 */
	justify?: 'start' | 'end' | 'center'

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

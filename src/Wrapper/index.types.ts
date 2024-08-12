// Types
import type { ResponsiveStyleValue, GridSpacing } from '@mui/system'
import type { BoxProps } from '@mui/material'

export type SpinoramaWrapperProps = BoxProps & {
	/**
	 * Determines how the slides are aligned
	 * Available options are:
	 * - 'start': aligns the slides to the left
	 * - 'end': aligns the slides to the right
	 *
	 * @default 'start'
	 */
	justify?: 'start' | 'end'

	/**
	 * Determines the direction of the slideshow
	 * When `true`, the slides will be displayed in reverse order
	 *
	 * @default false
	 */
	reverse?: boolean

	/**
	 * Defines the space between the type `item` components
	 * This can be any valid [Spacing value](https://mui.com/material-ui/react-grid/#spacing)
	 *
	 *
	 * @default 0
	 */
	spacing?: ResponsiveStyleValue<GridSpacing>
}

'use client'

// @ts-ignore
import { handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from '@mui/system'

// Types
import type { GenerateLayoutProps } from './generate-layout.types'

export function GenerateLayout(props: GenerateLayoutProps) {
	// Props
	const { theme, layout } = props

	// Varaibles
	let styles = {}

	if (layout) {
		const layoutValues = resolveBreakpointValues({
			values: layout,
			breakpoints: theme.breakpoints.values
		})

		styles = handleBreakpoints({ theme }, layoutValues, (propValue, breakpoint) => {
			console.log('propValue', propValue, 'breakpoint', breakpoint)
		})
	}

	return styles
}

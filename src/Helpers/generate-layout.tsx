'use client'

// @ts-ignore
import { handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues, style } from '@mui/system'

// Types
import type { GenerateLayoutPositionsProps, GenerateLayoutProps } from './generate-layout.types'

const GenerateLayoutPositions = (props: GenerateLayoutPositionsProps) => {
	// Props
	const { propValue } = props

	return {
		position: propValue != 'inherit' ? 'absolute' : 'inherit',
		top: ['top-left', 'top-center', 'top-right'].includes(propValue) ? 0 : ['center-left', 'center-right'].includes(propValue) ? '50%' : 'inherit',
		right: ['top-right', 'center-right', 'bottom-right'].includes(propValue) ? 0 : 'inherit',
		bottom: ['bottom-left', 'bottom-center', 'bottom-right'].includes(propValue) ? 0 : 'inherit',
		left: ['top-left', 'center-left', 'bottom-left'].includes(propValue) ? 0 : ['top-center', 'bottom-center'].includes(propValue) ? '50%' : 'inherit',
		transform: `${['top-center', 'bottom-center'].includes(propValue) ? `translateX(-50%) ` : ''}translateY(${
			['bottom-left', 'bottom-center', 'bottom-right'].includes(propValue) ? '50%' : '-50%'
		})`
	}
}

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
			return GenerateLayoutPositions({ propValue })
		})
	}

	return styles
}

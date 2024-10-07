'use client'

// @ts-ignore
import { handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from '@mui/system'
import { useTheme } from '@mui/material/styles'

// Types
import type { GenerateLayoutPositionsProps, GenerateLayoutProps } from './generate-layout.types'

const GenerateLayoutPositions = (props: GenerateLayoutPositionsProps) => {
	// Props
	const { propValue, rightHandSide } = props

	// Varaibles
	const theme = useTheme()

	return {
		position: propValue != 'inherit' ? 'absolute' : 'inherit',
		top: ['top-left', 'top-center', 'top-right'].includes(propValue) ? 0 : ['center-left', 'center-right'].includes(propValue) ? '50%' : 'inherit',
		right: ['top-right', 'center-right', 'bottom-right'].includes(propValue)
			? 0
			: theme.direction === 'ltr' && ['top-center', 'bottom-center'].includes(propValue)
			? '50%'
			: 'inherit',
		bottom: ['bottom-left', 'bottom-center', 'bottom-right'].includes(propValue) ? 0 : 'inherit',
		left: ['top-left', 'center-left', 'bottom-left'].includes(propValue)
			? 0
			: theme.direction === 'rtl' && ['top-center', 'bottom-center'].includes(propValue)
			? '50%'
			: 'inherit',
		transform: `${
			['top-center', 'bottom-center'].includes(propValue) ? `translateX(${rightHandSide ? 'calc(100% + 5px)' : theme.direction === 'rtl' ? '5px' : '-5px'}) ` : ''
		}translateY(${['bottom-left', 'bottom-center', 'bottom-right'].includes(propValue) ? '50%' : '-50%'})`
	}
}

export function GenerateLayout(props: GenerateLayoutProps) {
	// Props
	const { theme, layout, rightHandSide } = props

	// Varaibles
	let styles = {}

	if (layout) {
		const layoutValues = resolveBreakpointValues({
			values: layout,
			breakpoints: theme.breakpoints.values
		})

		styles = handleBreakpoints({ theme }, layoutValues, (propValue, breakpoint) => {
			return GenerateLayoutPositions({ propValue, rightHandSide })
		})
	}

	return styles
}

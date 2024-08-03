'use client'

import { useTheme } from '@mui/material/styles'
import { useMediaQuery, useScrollTrigger, Slide } from '@mui/material'

// Types
import type { HideOnScrollProps } from '@/types/components/theme/hide-on-scroll'

const HideOnScroll = (props: HideOnScrollProps) => {
	// Props
	const { children, window, onlyMobile, onlyDesktop } = props

	// Variables
	const theme = useTheme()
	const lessThanSmall = useMediaQuery(theme.breakpoints.down('sm'))

	const trigger = useScrollTrigger({
		target: window ? window() : undefined
	})

	return (
		<Slide appear={false} direction="down" in={(lessThanSmall && onlyMobile) || (!lessThanSmall && onlyDesktop) ? !trigger : true}>
			{children}
		</Slide>
	)
}

export default HideOnScroll

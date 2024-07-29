import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaActionsProps } from './index.types'

const SpinoramaActions: React.FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { className, children } = props

	return (
		<Box className={`spinorama-actions${className ? ` ${className}` : ''}`} display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...props}>
			{children}
		</Box>
	)
}

export default SpinoramaActions

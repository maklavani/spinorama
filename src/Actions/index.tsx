import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaActionsProps } from './index.types'

const SpinoramaActions: React.FC<SpinoramaActionsProps> = (props: SpinoramaActionsProps) => {
	// Props
	const { className, children } = props

	return (
		<Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: 1, md: 2 }} {...props} className={`spinorama-actions${className ? ` ${className}` : ''}`}>
			{children}
		</Box>
	)
}

export default SpinoramaActions

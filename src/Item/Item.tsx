import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaItemProps } from './Item.types'

const SpinoramaItem: React.FC<SpinoramaItemProps> = (props: SpinoramaItemProps) => {
	// Props
	const { className, children } = props

	return (
		<Box className={`spinorama-item${className ? ` ${className}` : ''}`} flex="0 0 100%">
			{children}
		</Box>
	)
}

export { SpinoramaItem }

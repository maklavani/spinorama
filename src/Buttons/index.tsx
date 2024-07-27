import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaButtonsProps } from './index.types'

const SpinoramaButtons: React.FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { className, children } = props

	return <Box className={`spinorama-buttons${className ? ` ${className}` : ''}`}>{children}</Box>
}

export default SpinoramaButtons

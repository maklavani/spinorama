import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaButtonsProps } from './index.types'

const SpinoramaButtons: React.FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { className, children } = props

	return (
		<Grid className={`spinorama-buttons${className ? ` ${className}` : ''}`} item flexGrow={1} {...props}>
			{children}
		</Grid>
	)
}

export default SpinoramaButtons

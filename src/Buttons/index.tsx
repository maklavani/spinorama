import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaButtonsProps } from './index.types'

const SpinoramaButtons: React.FC<SpinoramaButtonsProps> = (props: SpinoramaButtonsProps) => {
	// Props
	const { className, children } = props

	return (
		<Grid item flexGrow={1} width={1} {...props} className={`spinorama-buttons${className ? ` ${className}` : ''}`}>
			{children}
		</Grid>
	)
}

export default SpinoramaButtons

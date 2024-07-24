import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaItemProps } from './Item.types'

const SpinoramaItem: React.FC<SpinoramaItemProps> = (props: SpinoramaItemProps) => {
	// Props
	const { className, children } = props

	return (
		<Grid className={`spinorama-item${className ? ` ${className}` : ''}`} xs={12} {...props}>
			{children}
		</Grid>
	)
}

export { SpinoramaItem }

import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaProps } from './Spinorama.types'

const Spinorama: React.FC<SpinoramaProps> = (props: SpinoramaProps) => {
	// Props
	const { className, children } = props

	return <Grid className={className}>{children}</Grid>
}

export { Spinorama }

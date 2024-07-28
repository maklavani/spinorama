import * as React from 'react'
import { Grid, IconButton } from '@mui/material'
import { CircleOutlined as CircleOutlinedIcon } from '@mui/icons-material'

// Types
import type { SpinoramaThumbnailDotProps } from './index.types'

const SpinoramaThumbnailDot: React.FC<SpinoramaThumbnailDotProps> = (props: SpinoramaThumbnailDotProps) => {
	// Props
	const { className, active } = props

	return (
		<Grid className={`spinorama-thumbnail-dot${className ? ` ${className}` : ''}${active ? ` ${active}` : ''}`} item flex="0 0 fit-content">
			<IconButton>
				<CircleOutlinedIcon />
			</IconButton>
		</Grid>
	)
}

export default SpinoramaThumbnailDot

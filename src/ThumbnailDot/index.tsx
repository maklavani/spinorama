'use client'

import * as React from 'react'
import { Grid, IconButton } from '@mui/material'
import { CircleOutlined as CircleOutlinedIcon } from '@mui/icons-material'

// Types
import type { SpinoramaThumbnailDotProps } from './index.types'

const SpinoramaThumbnailDot: React.FC<SpinoramaThumbnailDotProps> = (props: SpinoramaThumbnailDotProps) => {
	// Props
	const { className, selected } = props

	return (
		<Grid
			className={`spinorama-thumbnail-dot${className ? ` ${className}` : ''}${selected ? ` ${selected}` : ''}`}
			item
			flex="0 0 fit-content"
			display="inline-flex"
			justifyContent="center"
			{...props}
		>
			<IconButton
				size="small"
				color="primary"
				sx={{
					opacity: selected ? 1 : 0.8,
					color: selected ? 'primary.dark' : 'primary.main'
				}}
			>
				<CircleOutlinedIcon />
			</IconButton>
		</Grid>
	)
}

export default SpinoramaThumbnailDot

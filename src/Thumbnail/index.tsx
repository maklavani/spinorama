'use client'

import React, { FC } from 'react'
import { Grid, IconButton } from '@mui/material'
import { CircleOutlined as CircleOutlinedIcon } from '@mui/icons-material'

// Types
import type { SpinoramaThumbnailProps } from './index.types'

const SpinoramaThumbnail: FC<SpinoramaThumbnailProps> = (props: SpinoramaThumbnailProps) => {
	// Props
	const { ref, thumbnailsref, className } = props

	return (
		<Grid ref={ref} item flex="0 0 fit-content" display="inline-flex" justifyContent="center" {...props} className={`spinorama-thumbnail${className ? ` ${className}` : ''}`}>
			<IconButton
				ref={ref => thumbnailsref?.current.push(ref)}
				size="small"
				color="primary"
				sx={{
					opacity: 0.8,
					color: 'primary.main',
					'.selected &.MuiButtonBase-root': {
						opacity: 1,
						color: 'primary.dark'
					}
				}}
			>
				<CircleOutlinedIcon />
			</IconButton>
		</Grid>
	)
}

export default SpinoramaThumbnail

'use client'

import React, { FC, Children, isValidElement, cloneElement } from 'react'
import { Grid, IconButton } from '@mui/material'
import { CircleOutlined as CircleOutlinedIcon } from '@mui/icons-material'

// Types
import type { ReactElement } from 'react'
import type { SpinoramaThumbnailProps } from './index.types'

const SpinoramaThumbnail: FC<SpinoramaThumbnailProps> = (props: SpinoramaThumbnailProps) => {
	// Props
	const { ref, className, thumbnailsRef, children, ...otherProps } = props

	return (
		<Grid
			ref={ref}
			className={`spinorama-thumbnail${className ? ` ${className}` : ''}`}
			flex="0 0 fit-content"
			display="inline-flex"
			justifyContent="center"
			zIndex={1}
			{...otherProps}
		>
			{Children.count(children) ? (
				Children.map(children, child => {
					if (isValidElement(child)) return cloneElement(child as ReactElement, { ref: (ref: HTMLButtonElement) => thumbnailsRef?.current.push(ref) })
					else return child
				})
			) : (
				<IconButton
					ref={ref => thumbnailsRef?.current.push(ref)}
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
			)}
		</Grid>
	)
}

export default SpinoramaThumbnail

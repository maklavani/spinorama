'use client'

import { IconButton } from '@mui/material'

// Types
import type { IconButtonProps } from '@/types/components/atoms/buttons/icon'

const IconButtonAtom = (props: IconButtonProps) => {
	// Props
	const { icon, onClick } = props

	return (
		<IconButton
			size="large"
			aria-label="icon button"
			onClick={onClick}
			sx={{
				p: 0.75,
				color: 'primary.dark',
				bgcolor: 'primary.light',
				borderRadius: 1,
				'&:hover': {
					color: 'primary.dark',
					bgcolor: 'primary.light'
				},
				'& .MuiSvgIcon-root': { fontSize: 36 },
				'& .MuiTouchRipple-root .MuiTouchRipple-child': { borderRadius: 1 }
			}}
		>
			{icon}
		</IconButton>
	)
}

export default IconButtonAtom

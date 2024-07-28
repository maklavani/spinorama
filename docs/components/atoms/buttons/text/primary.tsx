'use client'

import { Button } from '@mui/material'

// Types
import type { TextButtonProps } from '@/types/components/atoms/buttons/text'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const PurpleButtonAtom = (props: TextButtonProps) => {
	// Props
	const { lng, title, startIcon, endIcon, onClick } = props

	// Varaibles
	const { t } = useTranslation(lng)

	return (
		<Button
			variant="contained"
			disableElevation
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			sx={{
				py: 1.5,
				px: { xs: 1.5, md: 3 },
				fontWeight: 700,
				letterSpacing: -0.3,
				color: 'primary.contrastText',
				bgcolor: 'primary.dark',
				'&:hover': {
					color: 'primary.contrastText',
					bgcolor: 'primary.dark'
				}
			}}
		>
			{t(title)}
		</Button>
	)
}

export default PurpleButtonAtom

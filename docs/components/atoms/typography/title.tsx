'use client'

import { Typography } from '@mui/material'

// Types
import type { TypographyProps } from '@/types/components/atoms/typography'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const TitleTypographyAtom = (props: TypographyProps) => {
	// Props
	const { lng, text } = props

	// Varaibles
	const { t } = useTranslation(lng)

	return (
		<Typography variant="h3" fontSize={{ xs: 24, md: 40 }} fontWeight={700} lineHeight={1.5} letterSpacing={-2} textAlign="center">
			{t(text)}
		</Typography>
	)
}

export default TitleTypographyAtom

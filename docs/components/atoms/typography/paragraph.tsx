'use client'

import { Typography } from '@mui/material'

// Types
import type { TypographyProps } from '@/types/components/atoms/typography'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const ParagraphTypographyAtom = (props: TypographyProps) => {
	// Props
	const { lng, text } = props

	// Varaibles
	const { t } = useTranslation(lng)

	return <Typography variant="body2">{t(text)}</Typography>
}

export default ParagraphTypographyAtom

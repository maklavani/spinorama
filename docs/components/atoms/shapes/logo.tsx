'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button, Typography } from '@mui/material'

// Types
import type { LogoShapeProps } from '@/types/components/atoms/shapes/logo'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const LogoIconAtom = dynamic(() => import('@/components/atoms/icons/logo'))

const LogoShapeAtom = (props: LogoShapeProps) => {
	// Props
	const { lng } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
		<Link href={`/${lng}`}>
			<Button
				size="large"
				startIcon={<LogoIconAtom />}
				sx={{
					p: 1.25,
					borderRadius: 1,
					color: 'text.primary',
					'& .MuiSvgIcon-root': { fontSize: 28 },
					'&:hover': { bgcolor: 'inherit' }
				}}
			>
				<Typography variant="body2" fontSize={24} fontWeight={700} lineHeight={1} color="text.primary">
					{t('common:app.name')}
				</Typography>
			</Button>
		</Link>
	)
}

export default LogoShapeAtom

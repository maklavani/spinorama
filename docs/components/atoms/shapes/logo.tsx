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
				startIcon={<LogoIconAtom primary="#7d54ed" secondary="#ba39a7" />}
				sx={{
					p: 0.75,
					textTransform: 'inherit',
					borderRadius: 1,
					'& .MuiSvgIcon-root': { fontSize: 36 }
				}}
			>
				<Typography variant="body2" fontSize={24} fontWeight={300} color="text.primary">
					{t('common:app.name')}
				</Typography>
			</Button>
		</Link>
	)
}

export default LogoShapeAtom

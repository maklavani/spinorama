'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Grid, Box, Container } from '@mui/material'

// Types
import type { HomeProps } from '@/types/components/templates/home'

// MDX
import HomeEn from '@/markdown/en/home.mdx'
import HomeFa from '@/markdown/fa/home.mdx'

// Components
const CanvasOrganism = dynamic(() => import('@/components/organisms/canvas'), { ssr: false })
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return (
		<Grid container>
			<Box width="100dvw" height="100dvh" position="absolute" top="50%" left={0} sx={{ transform: 'translateY(-50%)' }}>
				<CanvasOrganism />
			</Box>

			<Container
				maxWidth="md"
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					textAlign: 'center',
					transform: 'translate(-50%, -50%)',
					zIndex: 1
				}}
			>
				{lng === 'fa' ? <HomeFa /> : <HomeEn />}

				<Grid container direction="column" mt={{ xs: 2, md: 4 }}>
					<Grid item>
						<Link href={`/${lng}/docs`}>
							<PrimaryButtonAtom title="form:button.docs" />
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	)
}

export default HomeTemplate

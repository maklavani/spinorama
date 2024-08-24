'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Container } from '@mui/material'
import Prism from 'prismjs'

// Load the languages to highlight
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const IndexTemplate = dynamic(() => import('@/components/templates/docs'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	// Callbacks
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<Container maxWidth="xl">
			<IndexTemplate lng={lng} />
		</Container>
	)
}

export default HomePage

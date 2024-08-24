'use client'

import dynamic from 'next/dynamic'

// Types
import type { IndexProps } from '@/types/components/templates/docs'

// MDX
const IndexEn = dynamic(() => import('@/markdown/en/docs/index.mdx'))
const IndexFa = dynamic(() => import('@/markdown/fa/docs/index.mdx'))

const IndexTemplate = (props: IndexProps) => {
	// Props
	const { lng } = props

	if (lng === 'fa') return <IndexFa />
	else return <IndexEn />
}

export default IndexTemplate

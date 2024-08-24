'use client'

import dynamic from 'next/dynamic'

// Types
import type { IndexProps } from '@/types/components/templates/docs'

// MDX
import IndexEn from '@/markdown/en/docs/index.mdx'
import IndexFa from '@/markdown/fa/docs/index.mdx'

const IndexTemplate = (props: IndexProps) => {
	// Props
	const { lng } = props

	return lng === 'fa' ? <IndexFa /> : <IndexEn />
}

export default IndexTemplate

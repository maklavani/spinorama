'use client'

import dynamic from 'next/dynamic'

// Types
import type { IndexPageProps } from '@/types/components/pages'

// MDX
const IndexEn = dynamic(() => import('@/md/en/index.mdx'))
const IndexFa = dynamic(() => import('@/md/fa/index.mdx'))

const IndexPage = (props: IndexPageProps) => {
	// Props
	const { lng } = props

	if (lng === 'fa') return <IndexFa />
	else return <IndexEn />
}

export default IndexPage

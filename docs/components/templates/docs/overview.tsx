import dynamic from 'next/dynamic'

// Types
import type { TemplateProps } from '@/types/components/templates'

// MDX
const OverviewEn = dynamic(() => import('@/markdown/en/docs/overview.mdx'))
const OverviewFa = dynamic(() => import('@/markdown/fa/docs/overview.mdx'))

const OverviewTemplate = (props: TemplateProps) => {
	// Props
	const { lng } = props

	return lng === 'fa' ? <OverviewFa /> : <OverviewEn />
}

export default OverviewTemplate

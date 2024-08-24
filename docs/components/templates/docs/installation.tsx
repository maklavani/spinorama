import dynamic from 'next/dynamic'

// Types
import type { TemplateProps } from '@/types/components/templates'

// MDX
const InstallationEn = dynamic(() => import('@/markdown/en/docs/installation.mdx'))
const InstallationFa = dynamic(() => import('@/markdown/fa/docs/installation.mdx'))

const InstallationTemplate = (props: TemplateProps) => {
	// Props
	const { lng } = props

	return lng === 'fa' ? <InstallationFa /> : <InstallationEn />
}

export default InstallationTemplate

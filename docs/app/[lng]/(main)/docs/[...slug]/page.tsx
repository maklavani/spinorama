import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Container } from '@mui/material'

// Types
import type { DocsPageProps } from '@/types/app/pages/docs'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const InstallationTemplate = dynamic(() => import('@/components/templates/docs/installation'))

const DocsPage = (props: DocsPageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default
	const slug = params?.slug ?? []
	const slugPathname = `/${slug.join('/')}`

	// Check if the path is valid
	const list: string[] = ['/installation']

	if (!list.includes(slugPathname)) notFound()

	return <Container maxWidth="xl">{slugPathname === '/installation' && <InstallationTemplate lng={lng} />}</Container>
}

export default DocsPage

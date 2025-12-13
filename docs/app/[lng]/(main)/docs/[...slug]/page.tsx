import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Container } from '@mui/material'

// Types
import type { DocsPageProps } from '@/types/app/pages/docs'

// Components
const InstallationTemplate = dynamic(() => import('@/components/templates/docs/installation'))

const DocsPage = async (props: DocsPageProps) => {
	// Props
	const { params } = props
	const { lng, slug } = await params

	// Variables
	const slugPathname = `/${slug.join('/')}`

	// Check if the path is valid
	const list: string[] = ['/installation']

	if (!list.includes(slugPathname)) notFound()

	return <Container maxWidth="xl">{slugPathname === '/installation' && <InstallationTemplate lng={lng} />}</Container>
}

export default DocsPage

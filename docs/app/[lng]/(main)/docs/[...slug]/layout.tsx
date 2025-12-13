// Types
import type { Metadata } from 'next'
import type { DocsLayoutProps } from '@/types/app/layouts/docs'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Metadata
export const generateMetadata = async (props: DocsLayoutProps): Promise<Metadata> => {
	// Props
	const { params } = props
	const { lng, slug } = await params

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)
	const slugPathname = `/${slug.join('/')}`

	// Check if the path is valid
	const list: string[] = ['/installation']

	if (!list.includes(slugPathname)) return { title: `${t('common:title.notFound')} | ${t('common:app.name')}` }
	else return { title: `${t(`links:${slug[slug.length - 1]}`)} | ${t('common:app.name')}` }
}

const DocsLayout = (props: DocsLayoutProps) => {
	// Props
	const { children } = props

	return <>{children}</>
}

export default DocsLayout

import dynamic from 'next/dynamic'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const IndexTemplate = dynamic(() => import('@/components/templates'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return <IndexTemplate lng={lng} />
}

export default HomePage

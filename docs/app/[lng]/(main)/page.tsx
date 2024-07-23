import dynamic from 'next/dynamic'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const IndexPage = dynamic(() => import('@/components/pages/index'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return <IndexPage lng={lng} />
}

export default HomePage

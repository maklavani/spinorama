import { Container } from '@mui/material'

// Types
import type { LayoutProps } from '@/types/app/layouts'

const MainLayout = (props: LayoutProps) => {
	// Props
	const { children } = props

	return <Container>{children}</Container>
}

export default MainLayout

'use client'

import { CookiesProvider } from 'react-cookie'

// Types
import type { CookieProviderProps } from '@/types/components/providers/cookie'

const CookieProvider = (props: CookieProviderProps) => {
	// Props
	const { children } = props

	return <CookiesProvider defaultSetOptions={{ path: '/' }}>{children}</CookiesProvider>
}

export default CookieProvider

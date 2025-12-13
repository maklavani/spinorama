'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

// Types
import type { NextjsProviderProps } from '@/types/components/providers/nextjs'

const NextjsProvider = (props: NextjsProviderProps) => {
	// Props
	const { dir, children } = props

	return <AppRouterCacheProvider options={{ stylisPlugins: dir == 'rtl' ? [prefixer, rtlPlugin] : [prefixer] }}>{children}</AppRouterCacheProvider>
}

export default NextjsProvider

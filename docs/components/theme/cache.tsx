'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

// Types
import type { AppCacheProps } from '@/types/components/theme/cache'

const AppCache = (props: AppCacheProps) => {
	// Props
	const { dir, children } = props

	return (
		<AppRouterCacheProvider
			options={{
				enableCssLayer: true,
				stylisPlugins: dir == 'rtl' ? [prefixer, rtlPlugin] : [prefixer]
			}}
		>
			{children}
		</AppRouterCacheProvider>
	)
}

export default AppCache

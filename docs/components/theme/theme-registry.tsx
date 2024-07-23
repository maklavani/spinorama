'use client'

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import CssBaseline from '@mui/material/CssBaseline'

// Types
import type { ThemeRegistryProps } from '@/types/components/theme/theme-registry'

// Configurations
import ExtendThemeConfig from '@/config/extend-theme'

export default function ThemeRegistry(props: ThemeRegistryProps) {
	// Props
	const { dir, children } = props

	return (
		<CssVarsProvider theme={ExtendThemeConfig(dir)}>
			<InitColorSchemeScript />
			<CssBaseline />
			{children}
		</CssVarsProvider>
	)
}

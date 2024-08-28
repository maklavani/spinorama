'use client'

import { ThemeProvider } from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import CssBaseline from '@mui/material/CssBaseline'

// Types
import type { ThemeRegistryProps } from '@/types/components/theme/theme-registry'

// Configurations
import CreateThemeConfig from '@/config/create-theme'

export default function ThemeRegistry(props: ThemeRegistryProps) {
	// Props
	const { dir, children } = props

	return (
		<ThemeProvider theme={CreateThemeConfig(dir)}>
			<InitColorSchemeScript attribute="class" />
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

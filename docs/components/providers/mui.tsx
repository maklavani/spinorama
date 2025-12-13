'use client'

import { ThemeProvider } from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import CssBaseline from '@mui/material/CssBaseline'

// Types
import type { MUIProviderProps } from '@/types/components/providers/mui'

// Configurations
import ThemeConfig from '@/config/theme'

const MUIProvider = (props: MUIProviderProps) => {
	// Props
	const { dir, children } = props

	return (
		<ThemeProvider theme={ThemeConfig(dir)}>
			<InitColorSchemeScript />
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default MUIProvider

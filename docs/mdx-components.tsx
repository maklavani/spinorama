import { Typography } from '@mui/material'

// Types
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
		h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
		h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
		h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
		h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
		h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
		p: ({ children }) => <Typography variant="body1">{children}</Typography>,
		...components
	}
}

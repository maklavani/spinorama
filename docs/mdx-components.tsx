import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

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
		pre: ({ children }) => <Typography component="pre">{children}</Typography>,
		table: ({ children }) => <Table>{children}</Table>,
		thead: ({ children }) => <TableHead>{children}</TableHead>,
		tbody: ({ children }) => <TableBody>{children}</TableBody>,
		tr: ({ children }) => <TableRow>{children}</TableRow>,
		td: ({ children }) => <TableCell>{children}</TableCell>,
		th: ({ children }) => <TableCell>{children}</TableCell>,
		...components
	}
}

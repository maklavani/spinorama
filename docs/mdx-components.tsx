import { Grid, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

// Types
import type { MDXComponents } from 'mdx/types'

// Components
import CodeAtom from '@/components/atoms/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h1" fontSize={{ xs: 36, md: 48 }} fontWeight={700} lineHeight={2}>
					{children}
				</Typography>
			</Grid>
		),
		h2: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h2" fontSize={{ xs: 30, md: 40 }} fontWeight={600} lineHeight={1.5}>
					{children}
				</Typography>
			</Grid>
		),
		h3: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h3">{children}</Typography>
			</Grid>
		),
		h4: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h4">{children}</Typography>
			</Grid>
		),
		h5: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h5">{children}</Typography>
			</Grid>
		),
		h6: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h6">{children}</Typography>
			</Grid>
		),
		p: ({ children }) => (
			<Grid size={12}>
				<Typography variant="body1">{children}</Typography>
			</Grid>
		),
		pre: ({ children }) => (
			<Grid size={12} sx={{ "& div[class^='language-']:nth-child(2)": { display: 'none' } }}>
				<pre style={{ overflow: 'auto' }}>{children}</pre>
			</Grid>
		),
		code: ({ className, children }) => {
			return (
				<>
					<CodeAtom className={className}>{children}</CodeAtom>
					<div className={className}>{children}</div>
				</>
			)
		},
		table: ({ children }) => (
			<Grid size={12}>
				<Table>{children}</Table>
			</Grid>
		),
		thead: ({ children }) => <TableHead>{children}</TableHead>,
		tbody: ({ children }) => <TableBody>{children}</TableBody>,
		tr: ({ children }) => <TableRow>{children}</TableRow>,
		td: ({ children }) => <TableCell>{children}</TableCell>,
		th: ({ children }) => <TableCell>{children}</TableCell>,
		...components
	}
}

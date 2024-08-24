'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'

// Load the languages to highlight
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// Types
import type { CodeProps } from '@/types/components/atoms/code'

const CodeAtom = (props: CodeProps) => {
	// Props
	const { className, children } = props

	// Callbacks
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <code className={className}>{children}</code>
}

export default CodeAtom

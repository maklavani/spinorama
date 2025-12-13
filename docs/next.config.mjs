import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.(glsl|vs|fs)$/,
			type: 'asset/source'
		})

		return config
	}
}

// MDX
const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: ['remark-gfm'],
		rehypePlugins: []
	}
})

export default withMDX(nextConfig)

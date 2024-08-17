import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|mdx)$/,
			use: 'raw-loader'
		})

		return config
	}
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: []
	}
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)

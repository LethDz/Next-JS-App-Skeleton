/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
		caseSensitiveRoutes: true,
		appDocumentPreloading: true,
		optimizeServerReact: true
  },
	typescript: {
		ignoreBuildErrors: false,
		tsconfigPath: "tsconfig.json"
	}
};

module.exports = nextConfig;
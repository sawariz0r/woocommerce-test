/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "shop-interview.acrowd.se",
				pathname: "**/*",
			},
		],
	},
	output: "standalone",
};

export default nextConfig;

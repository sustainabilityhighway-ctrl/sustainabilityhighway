/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'cdn.tailwindcss.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/blog/:path*',
                destination: '/blogs/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

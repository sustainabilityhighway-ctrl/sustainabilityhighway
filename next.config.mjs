/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'cdn.jsdelivr.net', 'cdn.tailwindcss.com'],
    },
};

export default nextConfig;

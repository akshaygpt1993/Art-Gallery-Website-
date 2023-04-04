/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    distDir: 'build',
    images: {
        domains: ["akshay-art-gallery.s3.ap-south-1.amazonaws.com"]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: false,
        removeConsole: !!isProd,
    },
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
    },
    webpack(config, { isServer }) {
        const conf = config;

        if (!isServer) {
            conf.resolve.fallback.fs = false;
        }

        return conf;
    },
};

module.exports = nextConfig;

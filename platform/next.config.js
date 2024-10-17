const NextFederationPlugin = require("@module-federation/nextjs-mf");
// const { FederatedTypesPlugin } = require("@module-federation/typescript");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, _) => {
    federationConfig = {
      name: 'platform',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        "./Sample": "./src/components/Sample.tsx",
      },
      shared: {},
    }
    config.plugins.push(
      new NextFederationPlugin(federationConfig)
    );

    return config;
  }
};

module.exports = nextConfig;

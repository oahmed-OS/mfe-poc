const NextFederationPlugin = require("@module-federation/nextjs-mf");
// const { FederatedTypesPlugin } = require("@module-federation/typescript");

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    platform: `platform@http://localhost:3000/_next/static/${location}/remoteEntry.js`
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    federationConfig = {
      name: 'atlas',
      filename: 'static/chunks/remoteEntry.js',
      remotes: remotes(options.isServer),
      exposes: {},
      shared: {},
    }
    config.plugins.push(
      new NextFederationPlugin(federationConfig)
    );

    return config;
  }
};

module.exports = nextConfig;

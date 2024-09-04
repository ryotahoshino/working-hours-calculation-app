import { composeConfigs } from 'storybook/internal/preview-api';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$']},
      }
    }

    return compilerConfig
  })(),
};



export default nextConfig;

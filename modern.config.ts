import appTools, { defineConfig } from '@modern-js/app-tools';
import ArcoWebpackPlugin from '@arco-plugins/webpack-react';
import bffPlugin from '@modern-js/plugin-bff';
import expressPlugin from '@modern-js/plugin-express';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  plugins: [appTools(), bffPlugin(), expressPlugin()],
  tools: {
    webpack: {
      plugins: [new ArcoWebpackPlugin()],
    },
  },
  server: {
    port: 8000,
  },
});

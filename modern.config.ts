import appTools, { defineConfig } from '@modern-js/app-tools';
import ArcoWebpackPlugin from '@arco-plugins/webpack-react';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  plugins: [appTools()],
  tools: {
    webpack: {
      plugins: [new ArcoWebpackPlugin()],
    },
  },
});

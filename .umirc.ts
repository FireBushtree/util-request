import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'envcloud-utils-request',
  favicon:
    './images/logo.png',
  hash: true,
  logo: '/util-request/images/logo.png',
  outputPath: 'docs-dist',
  base: '/util-request',
  publicPath: '/util-request/',
  proxy: {
    '/cloud': {
      target: 'http://ums.sxb805.cn:20513',
      timeout: 1000 * 60 * 10,
      changeOrigin: true,
    },
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});

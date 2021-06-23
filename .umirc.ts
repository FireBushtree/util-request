import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'envcloud-utils-request',
  favicon:
    './images/logo.png',
  logo: '/util-download/images/logo.png',
  outputPath: 'docs-dist',
  base: '/util-download',
  publicPath: '/util-download/',
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

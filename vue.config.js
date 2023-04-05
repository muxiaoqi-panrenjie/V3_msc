const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
  //  配置方式一
  // outputDir:'./build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/component',
  //     }
  //   }
  // }
  // 配置方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@':path.resolve(__dirname,'src'),
  //     components:'@/components'
  //   }
  // }
});

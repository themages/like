/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 14:25:44
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 16:04:22
 * @Description: vue-cli 和 electron-builder 的打包配置文件
 * @FilePath: /like/vue.config.js
 */
const pkg = require("./package.json");
const win = require("./config/platform/win");
const draw = require("./config/platform/draw");
const nsis = require("./config/nsis/index");

const isDev = process.env.NODE_ENV !== "production";

const appId = "themages.canicode.cn";
const copyright = "Copyright canicode © 20201";

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  lintOnSave: isDev,
  productionSourceMap: isDev,
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/background.js",
      builderOptions: {
        appId,
        productName: pkg.name, // 项目名，也是生成的安装文件名
        copyright, // 版权信息
        publish: ["github"],
        directories: {
          output: "./dist_electron", // 输出文件路径
        },
        mac: draw.mac,
        win,
        dmg: draw.dmg,
        nsis,
      },
      externals: [],
      nodeModulesPath: ["./node_modules"],
      customFileProtocol: "canicode://./",
    },
  },
};

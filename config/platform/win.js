/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:23:17
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 16:21:45
 * @Description: win 系统打包配置文件
 * @FilePath: /like/config/platform/win.js
 */
const config = require("../index");
// const sign = require("../../config/certificate/index");
module.exports = {
  icon: "build/icons/app.ico",
  target: [
    {
      target: "nsis",
      arch: [
        // "x64" // 64位
        "ia32", // 32位
      ],
    },
  ],
  artifactName: config.artifactName,
  // sign,
};

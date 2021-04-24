/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:23:23
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 16:20:49
 * @Description: macOS 苹果系统打包配置文件
 * @FilePath: /like/config/platform/draw.js
 */
const config = require("../index");
module.exports = {
  mac: {
    category: "public.app-category.productivity",
    icon: "build/icons/icon.ico",
    target: [
      "dmg",
      // "zip"
    ],
    entitlements: "build/entitlements/entitlements.mac.plist",
    hardenedRuntime: true,
    extendInfo: {
      NSCameraUsageDescription: "Request camera usage",
      NSMicrophoneUsageDescription: "Request mic usage",
    },
  },
  dmg: {
    icon: "build/icons/icon.ico",
    iconSize: 100,
    artifactName: config.artifactName,
    contents: [
      {
        x: 380,
        y: 280,
        type: "link",
        path: "/Applications",
      },
      {
        x: 110,
        y: 280,
        type: "file",
      },
    ],
    window: {
      width: 500,
      height: 500,
    },
  },
};

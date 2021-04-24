/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:23:23
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 18:12:41
 * @Description: macOS 苹果系统打包配置文件
 * @FilePath: /like/config/platform/draw.js
 */
const config = require("../index");
module.exports = {
  mac: {
    category: "public.app-category.productivity",
    icon: "build/icons/icon.icns",
    target: ["dmg", "zip"],
    entitlements: "build/entitlements/entitlements.mac.plist",
    hardenedRuntime: true,
    extendInfo: {
      NSCameraUsageDescription: "Request camera usage",
      NSMicrophoneUsageDescription: "Request mic usage",
    },
  },
  dmg: {
    icon: "build/icons/icon.icns",
    background: "build/icons/background.png",
    iconSize: 128,
    artifactName: config.artifactName,
    contents: [
      {
        x: 410,
        y: 190,
        type: "link",
        path: "/Applications",
      },
      {
        x: 130,
        y: 190,
        type: "file",
      },
    ],
    window: {
      width: 640,
      height: 480,
    },
  },
};

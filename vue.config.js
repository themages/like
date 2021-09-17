/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-16 20:27:13
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-17 01:06:07
 * @Description: 构建、打包配置文件
 * @FilePath: /like/vue.config.js
 */
const pkg = require("./package.json");
const isDev = process.env.NODE_ENV !== "production";
const appId = "themages.canicode.cn";
const copyright = "Copyright canicode © 2021";
const artifactName = "${productName}_${version}.${ext}";

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    devtool: isDev ? "source-map" : undefined,
  },
  lintOnSave: isDev,
  productionSourceMap: isDev,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: isDev ? "[name]-[local]-[hash:8]" : "[hash:base64:8]",
        },
        localsConvention: "asIs",
      },
      sass: {
        prependData: `@import "~@/assets/style/index.scss";`,
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/background.js",
      externals: ["trtc-electron-sdk"],
      nodeModulesPath: ["./node_modules"],
      customFileProtocol: "likelive://./",
      builderOptions: {
        appId,
        productName: pkg.name, // 项目名，也是生成的安装文件名
        copyright, // 版权信息
        publish: ["github"],
        directories: {
          output: "./dist_electron", // 输出文件路径
        },
        win: {
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
          artifactName,
          // sign,
        },
        mac: {
          category: "public.app-category.productivity",
          icon: "build/icons/app.icns",
          target: ["dmg"], // "zip"
          identity: "themages.canicode.cn",
          hardenedRuntime: true,
          gatekeeperAssess: false,
          entitlements: "build/entitlements/entitlements.mac.plist",
          entitlementsInherit: "build/entitlements/entitlements.mac.plist",
          extendInfo: {
            NSCameraUsageDescription: "Request camera usage",
            NSMicrophoneUsageDescription: "Request mic usage",
          },
        },
        dmg: {
          icon: "build/icons/app.icns",
          background: "build/icons/background.png",
          iconSize: 128,
          sign: false,
          artifactName,
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
            width: 540,
            height: 380,
          },
        },
        nsis: {
          language: "2052", // 安装语言代码
          oneClick: false, // 是否一键安装
          perMachine: true, // 选择按机器安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: "build/icons/app.ico", // 安装图标
          uninstallerIcon: "build/icons/app.ico", //卸载图标
          installerHeaderIcon: "build/icons/app.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          menuCategory: true, // 为开始菜单快捷方式和程序文件目录创建子菜单
          runAfterFinish: true, // 安装完成后默认勾选打开应用
          shortcutName: pkg.name, // 图标名称
          include: "build/nsis/installer.nsh", // 自定义 NSIS 脚本
        },
      },
    },
  },
};

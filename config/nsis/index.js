/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:13:11
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 18:15:17
 * @Description: NSIS 配置文件
 * @FilePath: /like/config/nsis/index.js
 */
const pkg = require("../../package.json");

module.exports = {
  language: "2052", // 安装语言代码
  oneClick: true, // 是否一键安装
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
  include: "installer.nsh", // 自定义 NSIS 脚本
};

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:31:49
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 16:19:45
 * @Description: builder 公共打包配置文件
 * @FilePath: /like/config/index.js
 */
const isDev = process.env.NODE_ENV !== "production";
const envName = isDev ? "test" : "";
const artifactName = "${productName}" + `${envName}` + "_${version}.${ext}";

module.exports = {
  artifactName,
};

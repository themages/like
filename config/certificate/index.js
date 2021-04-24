/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-24 15:07:44
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-24 15:11:55
 * @Description: 代码签名证书配置文件
 * @FilePath: /like/config/certificate/index.js
 */

module.exports = {
  verifyUpdateCodeSignature: false,
  signingHashAlgorithms: ["sha256", "sha1"],
  signDlls: true,
  rfc3161TimeStampServer: "http://timestamp.digicert.com",
  certificateFile: "canicode.pfx",
  certificatePassword: "canicode",
};

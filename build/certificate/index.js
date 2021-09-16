/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-16 20:32:40
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-16 20:32:41
 * @Description: windows 代码签名证书配置文件
 * @FilePath: /like/build/certificate/index.js
 */
module.exports = {
	verifyUpdateCodeSignature: false,
	signingHashAlgorithms: ['sha256', 'sha1'],
	signDlls: true,
	rfc3161TimeStampServer: 'http://timestamp.digicert.com',
	certificateFile: 'likelive.pfx',
	certificatePassword: 'canicode',
}

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:49:01
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-27 00:06:15
 * @Description: 设备插拔更新处理
 * @FilePath: /like/src/mediaSDK/config/devices/change.js
 */

export default function change(obj = {}) {
  const { handler } = obj;
  try {
    navigator.mediaDevices.ondevicechange = function (event) {
      handler(null, event);
    };
  } catch (error) {
    handler(error);
  }
}

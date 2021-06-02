/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:49:01
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 00:18:47
 * @Description: 设备插拔更新处理
 * @FilePath: /like/src/sdk/rtc/devices/change.js
 */

export default function change(obj) {
  const { handler } = obj;
  navigator.mediaDevices.ondevicechange = function (event) {
    handler(null, event);
  };
}

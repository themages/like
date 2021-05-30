/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:49:01
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 19:53:41
 * @Description: 设备插拔更新处理
 * @FilePath: /like/src/mediaSDK/config/devices/change.js
 */

export default function change(obj) {
  navigator.mediaDevices.ondevicechange = function (event) {
    obj.handler(null, event);
  };
}

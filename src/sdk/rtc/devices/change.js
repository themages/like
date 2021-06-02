/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:49:01
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 15:26:15
 * @Description: 设备插拔更新处理
 * @FilePath: /like/src/sdk/rtc/devices/change.js
 */

export default function change(obj) {
  navigator.mediaDevices.ondevicechange = function (event) {
    obj.handler(null, event);
  };
}

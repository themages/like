/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:13:21
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 00:16:00
 * @Description: 获取设备：麦克风、扬声器、摄像头
 * @FilePath: /like/src/sdk/rtc/devices/index.js
 */

export default function enumerateDevices(obj) {
  const { handler } = obj;
  return navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      handler(null, devices);
    })
    .catch(handler);
}

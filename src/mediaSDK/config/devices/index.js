/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:13:21
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 19:52:32
 * @Description: 获取设备：麦克风、扬声器、摄像头
 * @FilePath: /like/src/mediaSDK/config/devices/index.js
 */

export default function enumerateDevices(obj) {
  return navigator.mediaDevices
    .enumerateDevices()
    .then((device) => {
      obj.handler(null, device);
    })
    .catch((err) => {
      obj.handler(err);
    });
}

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:13:21
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-27 00:06:56
 * @Description: 获取设备：麦克风、扬声器、摄像头
 * @FilePath: /like/src/mediaSDK/config/devices/index.js
 */

export default function enumerateDevices(obj = {}) {
  const { handler } = obj;
  try {
    navigator.mediaDevices
      .enumerateDevices()
      .then((device) => {
        handler(null, device);
      })
      .catch((err) => {
        handler(err);
      });
  } catch (error) {
    handler(error);
  }
}

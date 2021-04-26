/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-27 00:04:55
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-27 00:09:39
 * @Description: 用户显示器或窗口
 * @FilePath: /like/src/mediaSDK/config/devices/display.js
 */
export default function constraints(obj = {}) {
  const { handler, constraints } = obj;
  try {
    navigator.mediaDevices
      .getDisplayMedia(constraints)
      .then((display) => {
        handler(null, display);
      })
      .catch((err) => {
        handler(err);
      });
  } catch (error) {
    handler(error);
  }
}

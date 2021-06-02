/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-27 00:04:55
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 15:28:24
 * @Description: 用户显示器或窗口
 * @FilePath: /like/src/sdk/rtc/devices/display.js
 */
export default function getDisplayMedia(obj) {
  return navigator.mediaDevices
    .getDisplayMedia(obj.constraints)
    .then((display) => {
      obj.handler(null, display);
    })
    .catch((err) => {
      obj.handler(err);
    });
}

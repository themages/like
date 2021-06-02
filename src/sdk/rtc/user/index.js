/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:32:50
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 15:26:42
 * @Description: 获取用户媒体流
 * @FilePath: /like/src/sdk/rtc/user/index.js
 */

export default function mediaStream(obj) {
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints
  // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaTrackConstraints
  return navigator.mediaDevices
    .getUserMedia(obj.constraints)
    .then((stream) => {
      obj.handler(null, stream);
    })
    .catch((err) => {
      obj.handler(err);
    });
}
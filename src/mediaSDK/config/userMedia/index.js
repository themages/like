/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:32:50
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-26 23:59:19
 * @Description: 获取用户媒体流
 * @FilePath: /like/src/mediaSDK/config/userMedia/index.js
 */

export default function mediaStream(obj) {
  const { handler, constraints } = obj;
  // constraints 详解
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints
  try {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        handler(null, stream);
      })
      .catch((err) => {
        handler(err);
      });
  } catch (error) {
    handler(error);
  }
}

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-26 23:32:50
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 00:15:13
 * @Description: 获取用户媒体流
 * @FilePath: /like/src/sdk/rtc/user/index.js
 */

export default function mediaStream(obj) {
  const { handler } = obj;
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints
  // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaTrackConstraints
  return (
    navigator.mediaDevices
      .getUserMedia(obj.constraints)
      .then((stream) => {
        handler(null, stream);
      })
      // err.name === "ConstraintNotSatisfiedError"
      // is not supported by your device
      .catch(handler)
  );
}

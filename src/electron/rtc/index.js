/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-05 23:29:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-05 23:45:18
 * @Description: rtc 推拉流相关
 * @FilePath: /like/src/electron/rtc/index.js
 */
import { desktopCapturer } from "electron";
export function getScreenStream(obj = {}) {
  const { handler } = obj;
  desktopCapturer
    .getSources({ types: ["window", "screen"] })
    .then((sources) => {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: sources[0].id,
              maxWidth: window.screen.width,
              maxHeight: window.screen.height,
            },
          },
        })
        .then((stream) => {
          handler(null, stream);
        })
        // err.name === "ConstraintNotSatisfiedError"
        // is not supported by your device
        .catch(handler);
    })
    .catch(handler);
}

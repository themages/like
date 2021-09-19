/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 02:08:50
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 02:42:51
 * @Description: 胶水代码
 * @FilePath: /like/src/features/index.js
 */
import { getUserMedia } from "@/browser/media/devices/getUserMedia";
import { getSources } from "@/native/modular/desktopCapturer";

// 屏幕分享
export function screenSharing() {
  return getSources({
    types: ["screen"],
  })
    .then(handlerSources)
    .catch(handleError);
}

async function handlerSources(sources) {
  for (const source of sources) {
    // if (source.name === "Entire Screen" || source.name === "Screen 2") {
    try {
      const stream = await getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: source.id,
            minWidth: 1280,
            maxWidth: 1280,
            minHeight: 720,
            maxHeight: 720,
          },
        },
      });
      handleStream(stream);
    } catch (e) {
      handleError(e);
    }
    // }
    break;
  }
}

function handleStream(stream) {
  const video = document.querySelector("#sharing");
  video.srcObject = stream;
  video.onloadedmetadata = () => video.play();
}

function handleError(e) {
  console.log(e);
}

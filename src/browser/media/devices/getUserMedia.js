/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 01:17:42
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 01:34:18
 * @Description: 一个 mediaStream，里面包含了请求的媒体类型的 mediaTrack
 * @FilePath: /like/src/browser/media/devices/getUserMedia.js
 */
/**
 * @param constraints MediaStreamConstraints { audio<MediaTrackConstraints>, video<MediaTrackConstraints> }
 * @returns Promise resolve<MediaStream> reject<DOMException>
 */
export function getUserMedia(constraints) {
  return navigator.mediaDevices.getUserMedia(constraints);
}

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 23:50:07
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:13:14
 * @Description: sdk 提供的工具类
 * @FilePath: /like/src/sdk/trtc/style.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 设置美颜、美白、红润效果级别
export function setBeautyStyle(style, beauty, white, ruddiness) {
  return rtcCloud.setBeautyStyle(style, beauty, white, ruddiness);
}

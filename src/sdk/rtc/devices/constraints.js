/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-27 00:01:00
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 19:53:14
 * @Description: 媒体约束属性
 * @FilePath: /like/src/sdk/rtc/devices/constraints.js
 */

export default function constraints(obj) {
  return obj.handler(null, navigator.mediaDevices.getSupportedConstraints());
}

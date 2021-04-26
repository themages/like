/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-04-27 00:01:00
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-04-27 00:06:49
 * @Description: 媒体约束属性
 * @FilePath: /like/src/mediaSDK/config/devices/constraints.js
 */

export default function constraints(obj = {}) {
  const { handler } = obj;
  try {
    handler(null, navigator.mediaDevices.getSupportedConstraints());
  } catch (error) {
    handler(error);
  }
}

// const fastJson = require("fast-json-stringify");
import fastJson from "fast-json-stringify";

// 摄像头、麦克风、扬声器设备对象信息转化为字符串信息
export function stringify_devices() {
  return fastJson({
    title: "devices",
    type: "object",
    properties: {
      deviceId: {
        type: "string",
      },
      deviceName: {
        type: "string",
      },
    },
  });
}

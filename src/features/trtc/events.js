/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-23 18:45:58
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-23 19:12:15
 * @Description: sdk 事件回调
 * @FilePath: /like/src/features/trtc/events.js
 */
import {
  onDeviceChange,
  onCameraDidReady,
  onMicDidReady,
} from "@/sdk/trtc/events/devices";
import { device_camera_list } from "@/features/trtc/devices";
import store from "@/store/";
import { CAMERA_CHANGE_STATUS, MIC_CHANGE_STATUS } from "@/store/types";
import { DEVICES_STATUS_CONSTANT } from "@/features/trtc/types";
import { deviceTypeCamera, deviceStateRemove } from "@/features/trtc/sdk";
// 摄像头、麦克风、扬声器的设备状态改变
export function event_device_change() {
  return onDeviceChange(function (deviceId, type, state) {
    console.log(deviceId, type, state);
    // type 2 摄像头
    // state 1 拨出 0 插入
    // Windows 端返回设备名，Mac 端返回设备 ID
    switch (type) {
      case deviceTypeCamera:
        device_camera_list();
        event_camera_change(deviceId, state === deviceStateRemove);
        break;
      default:
        break;
    }
  });
}
// 使用中的摄像头设备被拨出
export function event_camera_change(id, state) {
  const camera = store.getters.camera;
  if (!camera) return;
  if (id === camera.deviceId || id === camera.deviceName) {
    store.commit(
      CAMERA_CHANGE_STATUS,
      state ? DEVICES_STATUS_CONSTANT.out : DEVICES_STATUS_CONSTANT.inserted
    );
  }
}
// 摄像头准备就绪
export function event_camera_ready() {
  onCameraDidReady(function () {
    store.commit(CAMERA_CHANGE_STATUS, DEVICES_STATUS_CONSTANT.use);
  });
}
// 麦克风准备就绪
export function event_mic_ready() {
  onMicDidReady(function () {
    store.commit(MIC_CHANGE_STATUS, DEVICES_STATUS_CONSTANT.use);
  });
}

import {
  getCameraDevicesList,
  getCurrentCameraDevice,
  setCurrentCameraDevice,
} from "@/sdk/trtc/cameraDevices";
import { getLocalItem, setLocalItem, removeLocalItem } from "@/utils/storage";
import { stringify_devices } from "@/utils/stringify";
import store from "@/store/";
import {
  CAMERA_CHANGE_CAMERA,
  CAMERA_CHANGE_DEVICES,
  CAMERA_CHANGE_STATUS,
} from "@/store/types";
import {
  CAMERA_LOCAL_KEY,
  MIC_LOCAL_KEY,
  SPEAKER_LOCAL_KEY,
} from "@/features/trtc/types";
import { DEVICES_STATUS_CONSTANT } from "@/features/trtc/types";

// 获取默认摄像头以及历史记录，从而是否更新设备记录
export function device_camera_store() {
  const cameraDevices = device_camera_list();
  const localCamera = device_camera_local();
  // 如果有摄像头设备，使用默认设备
  let hasDefaultCamera = false;
  // 历史记录的默认摄像头设备是否存在
  if (localCamera) {
    for (const device of cameraDevices) {
      if (localCamera.deviceId === device.deviceId) {
        setCurrentCameraDevice(device.deviceId);
        hasDefaultCamera = true;
        break;
      }
    }
    !hasDefaultCamera && device_camera_remove_local();
  }
  // 保存默认摄像头设备信息
  const currentCamera = device_camera_current();
  if (!hasDefaultCamera && currentCamera) {
    device_camera_add_local(currentCamera);
    hasDefaultCamera = true;
  }
  // 更新摄像头设备状态
  store.commit(
    CAMERA_CHANGE_STATUS,
    hasDefaultCamera
      ? DEVICES_STATUS_CONSTANT.available
      : DEVICES_STATUS_CONSTANT.unavailable
  );
}
// 获取所有摄像头设备列表，并保存到 store 中
export function device_camera_list() {
  const cameraDevices = getCameraDevicesList();
  store.commit(CAMERA_CHANGE_DEVICES, cameraDevices);
  return cameraDevices;
}
// 获取当前使用的摄像头设备信息，并保存到 store 中
export function device_camera_current() {
  let currentCamera = getCurrentCameraDevice();
  // 等待 trtc sdk 修复错误
  if (currentCamera && currentCamera.deviceName === currentCamera.deviceId) {
    currentCamera = null;
  }
  store.commit(CAMERA_CHANGE_CAMERA, currentCamera);
  return currentCamera;
}
// 获取摄像头记录
export function device_camera_local() {
  const localCamera = getLocalItem(CAMERA_LOCAL_KEY);
  return localCamera && JSON.parse(localCamera);
}
// 删除摄像头记录
export function device_camera_remove_local() {
  return removeLocalItem(CAMERA_LOCAL_KEY);
}
// 保存摄像头记录
export function device_camera_add_local(currentCamera) {
  const stringify = stringify_devices();
  return setLocalItem(CAMERA_LOCAL_KEY, stringify(currentCamera));
}

// 获取麦克风记录
export function device_mic_local() {
  const localMic = getLocalItem(MIC_LOCAL_KEY);
  return localMic && JSON.parse(localMic);
}
// 删除麦克风记录
export function device_mic_remove_local() {
  return removeLocalItem(MIC_LOCAL_KEY);
}
// 保存麦克风记录
export function device_mic_add_local(currentMic) {
  const stringify = stringify_devices();
  return setLocalItem(MIC_LOCAL_KEY, stringify(currentMic));
}

// 获取扬声器记录
export function device_speaker_local() {
  const localSpeaker = getLocalItem(SPEAKER_LOCAL_KEY);
  return localSpeaker && JSON.parse(localSpeaker);
}
// 删除扬声器记录
export function device_speaker_remove_local() {
  return removeLocalItem(SPEAKER_LOCAL_KEY);
}
// 保存扬声器记录
export function device_speaker_add_local(currentSpeaker) {
  const stringify = stringify_devices();
  return setLocalItem(SPEAKER_LOCAL_KEY, stringify(currentSpeaker));
}

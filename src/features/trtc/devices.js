/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-23 18:45:58
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-23 19:12:28
 * @Description: 设备状态记录
 * @FilePath: /like/src/features/trtc/devices.js
 */
import {
  getCameraDevicesList,
  getCurrentCameraDevice,
  setCurrentCameraDevice,
} from "@/sdk/trtc/cameraDevices";
import {
  getMicDevicesList,
  getCurrentMicDevice,
  setCurrentMicDevice,
  getCurrentMicDeviceMute,
  setCurrentMicDeviceMute,
  getCurrentMicDeviceVolume,
  setCurrentMicDeviceVolume,
} from "@/sdk/trtc/micDevices";
import {
  getSpeakerDevicesList,
  getCurrentSpeakerDevice,
  setCurrentSpeakerDevice,
  getCurrentSpeakerDeviceMute,
  setCurrentSpeakerDeviceMute,
  getCurrentSpeakerVolume,
  setCurrentSpeakerVolume,
} from "@/sdk/trtc/speakerDevices";
import { getLocalItem, setLocalItem, removeLocalItem } from "@/utils/storage";
import { stringify_devices } from "@/utils/stringify";
import store from "@/store/";
import {
  CAMERA_CHANGE_CAMERA,
  CAMERA_CHANGE_DEVICES,
  CAMERA_CHANGE_STATUS,
  MIC_CHANGE_MIC,
  MIC_CHANGE_DEVICES,
  MIC_CHANGE_STATUS,
  MIC_CHANGE_VOLUME,
  SPEAKER_CHANGE_SPEAKER,
  SPEAKER_CHANGE_DEVICES,
  SPEAKER_CHANGE_STATUS,
  SPEAKER_CHANGE_VOLUME,
} from "@/store/types";
import {
  CAMERA_LOCAL_KEY,
  MIC_LOCAL_KEY,
  SPEAKER_LOCAL_KEY,
  DEVICES_STATUS_CONSTANT,
  MIC_DEFAULT_VOLUME,
  SPEAKER_DEFAULT_VOLUME,
} from "@/features/trtc/types";

// 获取默认摄像头以及历史记录，从而是否更新设备记录
export function device_camera_store() {
  const cameraDevices = device_camera_list();
  console.log("cameraDevices: %O", cameraDevices);
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
    for (const device of cameraDevices) {
      if (currentCamera.deviceId === device.deviceId) {
        device_camera_add_local(device);
        hasDefaultCamera = true;
        break;
      }
    }
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
// 获取所有麦克风设备列表，并保存到 store 中
export function device_mic_store() {
  const micDevices = device_mic_list();
  console.log("micDevices: %O", micDevices);
  const localMic = device_mic_local();
  // 如果有麦克风设备，使用默认设备
  let hasDefaultMic = false;
  // 历史记录的默认麦克风设备是否存在
  if (localMic) {
    for (const device of micDevices) {
      if (localMic.deviceId === device.deviceId) {
        setCurrentMicDevice(device.deviceId);
        hasDefaultMic = true;
        break;
      }
    }
    !hasDefaultMic && device_mic_remove_local();
  }
  // 保存默认麦克风设备信息
  const currentMic = device_mic_current();
  if (!hasDefaultMic && currentMic) {
    for (const device of micDevices) {
      if (currentMic.deviceId === device.deviceId) {
        device_mic_add_local(device);
        hasDefaultMic = true;
        break;
      }
    }
  }
  // 更新麦克风设备状态
  store.commit(
    MIC_CHANGE_STATUS,
    hasDefaultMic
      ? DEVICES_STATUS_CONSTANT.available
      : DEVICES_STATUS_CONSTANT.unavailable
  );
  device_mic_mute();
}
// 获取所有麦克风设备列表，并保存到 store 中
export function device_mic_list() {
  const micDevices = getMicDevicesList();
  store.commit(MIC_CHANGE_DEVICES, micDevices);
  return micDevices;
}
// 获取当前使用的麦克风设备信息，并保存到 store 中
export function device_mic_current() {
  let currentMic = getCurrentMicDevice();
  store.commit(MIC_CHANGE_MIC, currentMic);
  return currentMic;
}
// 获取并设置当前使用的静音状态，以及获取并设置麦克风的音量大小
export function device_mic_mute() {
  const mute = getCurrentMicDeviceMute();
  if (!mute) {
    setCurrentMicDeviceMute(false);
  }
  const volume = getCurrentMicDeviceVolume();
  if (!volume) {
    setCurrentMicDeviceVolume(MIC_DEFAULT_VOLUME);
  }
  store.commit(MIC_CHANGE_VOLUME, volume || MIC_DEFAULT_VOLUME);
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
// 获取所有扬声器设备列表，并保存到 store 中
export function device_speaker_store() {
  const speakerDevices = device_speaker_list();
  console.log("speakerDevices: %O", speakerDevices);
  const localSpeaker = device_speaker_local();
  // 如果有扬声器设备，使用默认设备
  let hasDefaultSpeaker = false;
  // 历史记录的默认扬声器设备是否存在
  if (localSpeaker) {
    for (const device of speakerDevices) {
      if (localSpeaker.deviceId === device.deviceId) {
        setCurrentSpeakerDevice(device.deviceId);
        hasDefaultSpeaker = true;
        break;
      }
    }
    !hasDefaultSpeaker && device_speaker_remove_local();
  }
  // 保存默认扬声器设备信息
  const currentSpeaker = device_speaker_current();
  if (!hasDefaultSpeaker && currentSpeaker) {
    for (const device of speakerDevices) {
      if (currentSpeaker.deviceId === device.deviceId) {
        device_speaker_add_local(device);
        hasDefaultSpeaker = true;
        break;
      }
    }
  }
  // 更新扬声器设备状态
  store.commit(
    SPEAKER_CHANGE_STATUS,
    hasDefaultSpeaker
      ? DEVICES_STATUS_CONSTANT.available
      : DEVICES_STATUS_CONSTANT.unavailable
  );
  device_speaker_mute();
}
// 获取所有扬声器设备列表，并保存到 store 中
export function device_speaker_list() {
  const speakerDevices = getSpeakerDevicesList();
  store.commit(SPEAKER_CHANGE_DEVICES, speakerDevices);
  return speakerDevices;
}
// 获取当前使用的扬声器设备信息，并保存到 store 中
export function device_speaker_current() {
  let currentSpeaker = getCurrentSpeakerDevice();
  console.log("currentSpeaker: %O", currentSpeaker);
  store.commit(SPEAKER_CHANGE_SPEAKER, currentSpeaker);
  return currentSpeaker;
}
// 获取并设置当前使用扬声器的静音状态，以及获取并设置扬声器的音量大小
export function device_speaker_mute() {
  const mute = getCurrentSpeakerDeviceMute();
  if (!mute) {
    setCurrentSpeakerDeviceMute(false);
  }
  const volume = getCurrentSpeakerVolume();
  if (!volume) {
    setCurrentSpeakerVolume(SPEAKER_DEFAULT_VOLUME);
  }
  store.commit(SPEAKER_CHANGE_VOLUME, volume || SPEAKER_DEFAULT_VOLUME);
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

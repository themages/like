// 使用中的设备状态： 0 设备未知 1 设备可用 2 设备不可用 3 设备被关闭 4 设备使用中 5 设备已拨出 6 设备已插入
export const DEVICES_STATUS_CONSTANT = {
  unknown: 0,
  available: 1,
  unavailable: 2,
  closed: 3,
  use: 4,
  out: 5,
  inserted: 6,
};
// 本地存储 key 名
export const CAMERA_LOCAL_KEY = "camera";
export const MIC_LOCAL_KEY = "mic";
export const SPEAKER_LOCAL_KEY = "speaker";

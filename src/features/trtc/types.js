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
// 登陆退出房间初始状态
export const ROOM_STATUS_DEFAULT = 0;
// 本地存储 key 名
export const CAMERA_LOCAL_KEY = "camera";
export const MIC_LOCAL_KEY = "mic";
export const SPEAKER_LOCAL_KEY = "speaker";
// 设置默认麦克风设备音量
export const MIC_DEFAULT_VOLUME = 90;
// 设置默认扬声器设备音量
export const SPEAKER_DEFAULT_VOLUME = 100;
// 测试麦克风音量变化的间隔
export const TEST_MIC_VOLUME = 600;
// 测试扬声器音量大小的播放文件
export const TEST_SPEAKER_FILE =
  "https://media.w3.org/2010/05/sintel/trailer.mp4";
// 本地流显示容器
export const local = "local";
// 远端流显示容器
export const remote = "remote";

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 00:11:53
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:11:53
 * @Description: sdk 配置参数
 * @FilePath: /like/src/features/trtc/sdk.js
 */
const define = window.require("trtc-electron-sdk/liteav/trtc_define");
// 主播角色
export const anchor = define.TRTCRoleType.TRTCRoleAnchor;
// 观众角色
export const audience = define.TRTCRoleType.TRTCRoleAudience;
// 视频通话应用场景
export const videoCall = define.TRTCAppScene.TRTCAppSceneVideoCall;
// 进房参数类
export const sdkParams = define.TRTCParams;
console.log(
  "添加设备: %O, 移除设备: %O, 设备已启用: %O, 未知类型: %O, 麦克风: %O, 扬声器: %O, 摄像头: %O",
  define.TRTCDeviceState.TRTCDeviceStateAdd,
  define.TRTCDeviceState.TRTCDeviceStateRemove,
  define.TRTCDeviceState.TRTCDeviceStateActive,
  define.TRTCDeviceType.TRTCDeviceTypeUnknow,
  define.TRTCDeviceType.TRTCDeviceTypeMic,
  define.TRTCDeviceType.TRTCDeviceTypeSpeaker,
  define.TRTCDeviceType.TRTCDeviceTypeCamera
);
export const deviceTypeCamera = define.TRTCDeviceType.TRTCDeviceTypeCamera;
export const deviceStateRemove = define.TRTCDeviceState.TRTCDeviceStateRemove;
// 视频编码参数
export const videoEncParam = define.TRTCVideoEncParam;
// 视频分辨率
export const videoResolution = define.TRTCVideoResolution;
// 分辨率模式（横屏分辨率 TRTCVideoResolutionModeLandscape - 竖屏分辨率 TRTCVideoResolutionModePortrait）
export const videoResolutionMode = define.TRTCVideoResolutionMode;

/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 00:11:53
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:11:53
 * @Description: sdk 配置参数
 * @FilePath: /like/src/features/trtc/sdk.js
 */
import {
  TRTCRoleType,
  TRTCAppScene,
} from "trtc-electron-sdk/liteav/trtc_define";
export const appId = 1400574386;
export const userId = "like";
export const userSig =
  "eJw1zL0OgjAYheF76Wzwoz9gSFyMg9HCQB1dwBb9UsTaEmM03rsIOp7nJO*L7KWK7saTjNAIyGzcqE3XY4Mjt2jNz4O2lXOoSRZzAJFytkimxzwcejO4EIICwKQ9Xr6WMBoLTv8a8DRk67yQrXTGFgglO8xTVe6uIjjd5Sv1DOcK-dpvb5sa8Lgk7w8fnDHe";
// 主播角色
export const anchor = TRTCRoleType.TRTCRoleAnchor;
// 观众角色
export const audience = TRTCRoleType.TRTCRoleAudience;
// 视频通话应用场景
export const videoCall = TRTCAppScene.TRTCAppSceneVideoCall;

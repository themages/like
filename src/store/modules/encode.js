const state = {
  videoResolution: 0, // TRTCVideoResolution 视频分辨率
  resMode: 0, // TRTCVideoResolutionMode 分辨率模式（横屏分辨率 - 竖屏分辨率）
  videoFps: 15, // Number 视频采集帧率
  videoBitrate: 0, // Number 视频上行码率
  minVideoBitrate: 0, // Number 最低视频码率，根据网络情况降低码率
  enableAdjustRes: 0, // Boolean 是否允许调整分辨率，弱网情况下会降低分辨率，保障流畅性
  videoFormat: 0, // TRTCVideoPixelFormat 视频帧的格式
  bufferType: 0, // TRTCVideoBufferType 视频数据结构类型
  data: 0, // ArrayBuffer 视频数据
  textureId: 0, // Number 视频纹理 id
  length: 0, // Number 视频数据的长度
  width: 0, // Number 画面的宽度
  height: 0, // Number 画面的高度
  timestamp: 0, // Number 时间戳，单位ms
  rotation: 0, // Number 画面旋转角度
  renderRotation: 0, // TRTCVideoRotation 视频画面旋转方向
  fillMode: 0, // TRTCVideoFillMode 视频画面填充模式
  mirrorType: 0, // TRTCVideoMirrorType 画面渲染镜像类型
};
const mutations = {
  // 同步更新扬声器设备信息
  changeSpeaker(state, speaker) {
    state.speaker = speaker;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

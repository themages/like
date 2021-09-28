const state = {
  status: 0, // 默认设备： 0 设备未知 1 设备可用 2 设备不可用 3 设备被关闭 4 设备使用中 5 设备已拨出 6 设备已插入
  mic: null, // 默认设备信息
  devices: null, // 所有麦克风设备信息
  volume: 0, // 音量大小：0 最小 100 最大
  muted: false, // 是否被静音
};
const mutations = {
  // 同步更新设备信息
  changeMic(state, mic) {
    state.mic = mic;
  },
  // 同步更新设备状态
  changeStatus(state, status) {
    state.status = status;
  },
  // 同步更新设备列表
  changeDevices(state, devices) {
    state.devices = devices;
  },
  // 同步更新麦克风音量
  changeVolume(state, volume) {
    state.volume = volume;
  },
  // 同步更新麦克风是否被静音
  changeMuted(state, bool) {
    state.muted = bool;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

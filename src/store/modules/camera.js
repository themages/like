const state = {
  status: 0, // 默认设备： 0 设备未知 1 设备可用 2 设备不可用 3 设备被关闭 4 设备使用中 5 设备已拨出 6 设备已插入
  camera: null, // 默认设备信息
  devices: null, // 所有摄像头设备信息
};
const mutations = {
  // 同步更新设备信息
  changeCamera(state, camera) {
    state.camera = camera;
  },
  // 同步更新设备状态
  changeStatus(state, status) {
    state.status = status;
  },
  // 同步更新设备列表
  changeDevices(state, devices) {
    state.devices = devices;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

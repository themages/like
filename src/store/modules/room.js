const state = {
  roomEnterStatus: 0, // 进入房间状态码
  roomExitStatus: 0, // 离开房间原因
  roomSwitchStatus: 0, // 切换房间状态码
  roomUserEnter: null, // 用户加入当前房间
  roomUserLeave: null, // 用户离开当前房间
  roomUserRole: null, // 用户角色
  roomSwitchRoleStatus: null, // 切换角色状态码
  user: null, // 选择进入房间的用户名和用户签名
};
const mutations = {
  changeRoomEnterStatus(state, num) {
    state.roomEnterStatus = num;
  },
  changeRoomExitStatus(state, num) {
    state.roomExitStatus = num;
  },
  changeRoomSwitchStatus(state, num) {
    state.roomSwitchStatus = num;
  },
  changeRoomUserEnter(state, user) {
    state.roomUserEnter = user;
  },
  changeRoomUserLeave(state, user) {
    state.roomUserLeave = user;
  },
  changeRoomUserRole(state, role) {
    state.roomUserRole = role;
  },
  changeRoomSwitchRoleStatus(state, num) {
    state.roomSwitchRoleStatus = num;
  },
  selectRoomUser(state, token) {
    state.user = token;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

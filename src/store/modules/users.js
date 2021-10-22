const state = {
  user: null, // 选择进入房间的用户名和用户签名
};
const mutations = {
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

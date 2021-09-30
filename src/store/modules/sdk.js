/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-27 21:52:03
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-27 22:24:22
 * @Description: trtc sdk 应用
 * @FilePath: /like/src/store/modules/sdk.js
 */
const state = {
  appId: 1400578184,
  users: [
    {
      userId: "like",
      userSig:
        "eJwtzFELgjAUhuH-cq5DtrnTptBNRGB4VWF1GWzKaZnDiQnRf8-Uy*-54P3AOT9FvW0hBRExWE2bjH11VNLET3J28WDc3XsykHLJGCrNtZwfO3hq7eiIKBhjs3ZU-20di0RLLtRSoWrMup25DkVVHt7IVePigLemfySe4gsetdOuzkOx99k2ZBv4-gD2mTFY",
    },
    {
      userId: "test",
      userSig:
        "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwiWpxSVQ8eKU7MSCgswUJStDEwMDU3MLQwsTiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxIzMzaytDAxMrCEmpKZDjS2sjQ-JDDbL9QvqzzVP9kpz7LCI7LK28zcudTcv6Dc2ak8x8XDMzzMwyQ82VapFgAR-DGa",
    },
    {
      userId: "online",
      userSig:
        "eJwtzMsOgjAUBNB-6dqQUqkUEleY6MJHomXh0qS35MqjDY-SxPjvIrCcM5P5EHl*BA5akhIWULKZMypoetQ4s2kqbGBtOlW*rEVF0jCilMciFNHSgLfYwuScc0YpXbTH*m*7LUtExNi67bCYjp-J9V6BKwaj2yPktdX5218yq0t50oMsYi9dYvh4uI178v0BoF0zfg__",
    },
    {
      userId: "group",
      userSig:
        "eJwtzEELgjAYxvHvsnPY69zmErqJXUoCo0N0aWzKy3AuMymj756px*f3wP9DTvsi6E1LEkIDIKtpozauwxInrtrm6Zfjoe3Ne9QkCRkAj2Uo2fyYl8fWjM45pwAwa4f130REN5JRRpcKVmN359JsGKwTkbsUMebZWaTX9UHn99r21VG9U6EUt7YRwLbk*wN0LDH2",
    },
  ], // sdk 用户名和签名
};
const mutations = {};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

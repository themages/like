/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-27 21:52:03
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-27 22:24:22
 * @Description: trtc sdk 应用
 * @FilePath: /like/src/store/modules/sdk.js
 */
const state = {
  appId: 1400574386,
  users: [
    {
      userId: "like",
      userSig:
        "eJw1zL0OgjAYheF76Wzwoz9gSFyMg9HCQB1dwBb9UsTaEmM03rsIOp7nJO*L7KWK7saTjNAIyGzcqE3XY4Mjt2jNz4O2lXOoSRZzAJFytkimxzwcejO4EIICwKQ9Xr6WMBoLTv8a8DRk67yQrXTGFgglO8xTVe6uIjjd5Sv1DOcK-dpvb5sa8Lgk7w8fnDHe",
    },
    {
      userId: "test",
      userSig:
        "eJwtzE0LglAQheH-creGTVfnGkIbkQRLWxi0aePHKENophcJo-*eqcvzHHg-4npOzIE64QppgtjMmwtqNJc8s6Zer94Xj7RtuRDuzgZAx7b2anno3XJHkyOiBIBFNdd-U5Z0EBSu2nM1ZQe-jC-BfXvzjrFHYRhJw0mCU5NVY65Tf3wZhAppiPL6eRDfHxcwMS4_",
    },
    {
      userId: "online",
      userSig:
        "eJwtzF0LgjAYhuH-suOQt7mpCB0EmbI*DloUHiqb8jKbsiSk6L9n6uFzPXB-yPUovZd2JCbUA7KaNipte6xw4tY2aPXyPJUpug4VidcMgIfMj4L50UOHTo-OOacAMGuPj78FPg05ZZG-VLAew3m5L9PcJC5NxO09oO63RWDuVjYCKpmd8HDJxM7V*bndkO8Pg*4ybA__",
    },
    {
      userId: "group",
      userSig:
        "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwulF*aUFUInilOzEgoLMFCUrQxMDA1NzE2MLM4hMakVBZlEqUNzU1NTIwMAAIlqSmQsSMzM2Mjc1MjUyhpqSmQ40NzLJMzPPNN-RpaQ0ySnP0L8gRr-M08wzJdDNLDiiws09NMAnMD0oKCO-ICPZVqkWAHEDMig_",
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

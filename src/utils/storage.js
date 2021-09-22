// 设置 localStorage
export function setLocalItem(name, value) {
  return localStorage.setItem(name, value);
}
// 获取 localStorage
export function getLocalItem(name) {
  return localStorage.getItem(name);
}
// 删除 localStorage
export function removeLocalItem(name) {
  return localStorage.removeItem(name);
}
// 清空 localStorage
export function clearLocalItem() {
  return localStorage.clear();
}

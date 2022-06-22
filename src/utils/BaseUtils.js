/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-17 19:12:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-20 21:06:40
 */

/**
 * 页面重绘事件队列
 * @param {*} method
 * @returns
 */
export function onResizeQueue(method) {
  const cache = window.onresize;
  if (cache === null) {
    window.onresize = method;
    return undefined;
  }
  window.onresize = function () {
    cache();
    method();
  };
}

/**
 * 解析浏览器url中的hash字符串,转换为对象
 * @returns hash对象
 */
export function getHashStringArgs(hash) {
  // 取得没有开头#的hash
  let qs = hash.length > 0 ? hash.substring(1) : "",
    // 保存数据的对象
    args = {};
  // 把每个参数添加到 args 对象
  for (let item of qs.split("#").map((kv) => kv.split("="))) {
    let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

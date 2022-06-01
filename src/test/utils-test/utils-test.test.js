/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-31 10:17:04
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-31 10:31:24
 */
const utils = require("../../utils/BaseUtils");

test("测试-解析浏览器url中的hash字符串,转换为对象方法", () => {
  expect(utils.getHashStringArgs("#role=A")).toEqual({
    role: "A",
  });
});

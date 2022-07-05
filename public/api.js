/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-05 15:24:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 15:35:06
 */
window._excelToJsonToJsObject = function (jsonString) {
  const obj = JSON.parse(jsonString);
  const result = [];
  if (obj instanceof Array) {
    obj.forEach((item) => {
      // 是否是字母列
      if (item["歌名"] === "" || item["歌手"] === "" || item["类型"] === "") {
        return;
      }

      const newType = [];
      const type = item["类型"].split("；");
      type.forEach((t) => {
        if (t === "国语") {
          newType.push("A");
          return;
        }
        if (t === "流行") {
          newType.push("B");
          return;
        }
        if (t === "古风") {
          newType.push("C");
          return;
        }
      });

      result.push({
        songName: item["歌名"],
        user: item["歌手"],
        language: item["语言"],
        remarks: item["备注"],
        type: newType,
        isHot: item["HOT"],
        isNew: item["NEW"],
      });
    });
  } else {
    throw new Error("请检查格式是否正确");
  }
  return JSON.stringify(result);
};

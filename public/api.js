window._excelToJsonToJsObject = function (jsonString) {
  const obj = JSON.parse(jsonString);
  const result = [];
  if (obj instanceof Array) {
    obj.forEach((item) => {
      // 是否是字母列
      if (item["列1"] === "" || item["列2"] === "") {
        return;
      }

      // 是否是第一行
      if (
        item["列1"] === "歌名" ||
        item["列2"] === "歌手" ||
        item["列3"] === "类型"
      ) {
        return;
      }

      const newType = [];
      const type = item["列3"].split("；");
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
        songName: item["列1"],
        user: item["列2"],
        language: "",
        remarks: "",
        type: newType,
      });
    });
  } else {
    throw new Error("请检查格式是否正确");
  }
  return JSON.stringify(result);
};

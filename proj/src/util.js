const stringJsonToJsonObj = (s) => {
  var parse;
  try {
    parse = JSON.parse(s);
  } catch (e) {
    return null;
  }

  return parse;
};

const dataToJSONObject = (s) =>
  Object.values(s).map((c) => stringJsonToJsonObj(c));

const range = (s) => [...Array(s).keys()];

const stringToInterger = (s) => +s.replace(/,/g, "");

const category = [
  "แผนงานบริหารงานปกครองและทะเบียน",
  "แผนงานบริหารการคลัง",
  "แผนงานรักษาความสะอาด",
  "แผนงานรักษาความเป็นระเบียบเรียบร้อย",
  "แผนงานการโยธา",
  "แผนงานจัดการระบายน้ าและแก้ไขปัญหาน้ าท่วม",
  "แผนงานพัฒนาสภาวะสิ่งแวดล้อม",
  "แผนงานพัฒนาชุมชน",
  "แผนงานอนามัยสิ่งแวดล้อม",
  "แผนงานบริหารการศึกษา",
];

export {
  stringJsonToJsonObj,
  dataToJSONObject,
  range,
  stringToInterger,
  category,
};

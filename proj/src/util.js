import data from "./sample.json";
var _ = require("lodash");
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

const fieldValue = (name, obj) => {
  //obj.filter((s) => s.name.includes(name))[0];
  return obj.filter((s) =>
    s.name.replace(/[่์]/, "").includes(name.replace(/[่์]/, ""))
  )[0];
};

const addValutToDistrictShape = (districtshape) => {
  const dataObject = dataToJSONObject(data);
  const dataObjectInter = dataObject.map((o) => {
    return {
      ...o,
      f0_sum_int: stringToInterger(o["sum"]),
      f1_sum_int: stringToInterger(o["f1_sum"]),
      f2_sum_int: stringToInterger(o["f2_sum"]),
      f3_sum_int: stringToInterger(o["f3_sum"]),
      f4_sum_int: stringToInterger(o["f4_sum"]),
      f5_sum_int: stringToInterger(o["f5_sum"]),
      f6_sum_int: stringToInterger(o["f6_sum"]),
      f7_sum_int: stringToInterger(o["f7_sum"]),
      f8_sum_int: stringToInterger(o["f8_sum"]),
      f9_sum_int: stringToInterger(o["f9_sum"]),
      f10_sum_int: stringToInterger(o["f10_sum"]),
    };
  });
  return {
    ...districtshape,
    default: {
      ...districtshape.default,
      features: districtshape.default.features.map((o) => {
        return {
          ...o,
          properties: {
            ...o.properties,
            ...fieldValue(o.properties.dname, dataObjectInter),
          },
        };
      }),
    },
  };
};

export {
  stringJsonToJsonObj,
  dataToJSONObject,
  range,
  stringToInterger,
  category,
  fieldValue,
  addValutToDistrictShape,
};

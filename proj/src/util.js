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

const category2 = [
  "สำนักปลัดกรุงเทพมหานคร",
  "สำนักการแพทย์",
  "สำนักอนามัย",
  "สำนักการศึกษา",
  "สำนักการโยธา",
  "สำนักการระบายน้ำ",
  "สำนักการคลัง",
  "สำนักเทศกิจ",
  "สำนักการจราจรและขนส่ง",
  "สำนักป้องกันและบรรเทาสาธารณภัย",
  "สำนักงบประมาณกรุงเทพมหานคร",
  "สำนักยุทธศาสตร์และประเมินผล",
  "สำนักส่ิงแวดล้อม",
  "สำนักวัฒนธรรม",
  "สำนักพัฒนาสังคม",
];
const fieldValue = (name, obj) => {
  //obj.filter((s) => s.name.includes(name))[0];
  return obj.filter((s) =>
    s.name.replace(/[่ฏฎ]/, "").includes(name.replace(/[่ฏฎ]/, ""))
  )[0];
};

const addCleanDescToData2 = (data2) => {
  return { ...data2, cleanDesc: data2.desc.split("&") };
};

const addValutToDistrictShape = (districtshape) => {
  const dataObject = dataToJSONObject(data);
  const dataObjectInter = dataObject.map((o) => {
    return {
      ...o,
      f0_sum_int: stringToInterger(o["sum"]),
      f1_sum_int: stringToInterger(o["f3_sum"]),
      f2_sum_int: stringToInterger(o["f10_sum"]),
      f3_sum_int: stringToInterger(o["f4_sum"]),
      f4_sum_int: stringToInterger(o["f1_sum"]),
      f5_sum_int: stringToInterger(o["f8_sum"]),
      f6_sum_int: stringToInterger(o["f7_sum"]),
      f7_sum_int: stringToInterger(o["f6_sum"]),
      f8_sum_int: stringToInterger(o["f8_sum"]),
      f9_sum_int: stringToInterger(o["f2_sum"]),
      f10_sum_int: stringToInterger(o["f9_sum"]),
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

const getuuid = () => {
  return Math.random().toString(26).slice(2);
};

const deleteLastList = (a) => {
  a.pop();
  return a;
};

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export {
  stringJsonToJsonObj,
  dataToJSONObject,
  range,
  stringToInterger,
  category,
  fieldValue,
  addValutToDistrictShape,
  addCleanDescToData2,
  category2,
  deleteLastList,
  getuuid,
  groupBy,
};

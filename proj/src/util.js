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
  return obj.filter((s) => s.name.includes(name))[0];
};

const addValutToDistrictShape = (districtshape) => {
  const dataObject = dataToJSONObject(data);
  //console.log(districtshape);

  return {
    ...districtshape,
    default: {
      ...districtshape.default,
      features: _.mapValues(districtshape.default.features, (o) => {
        return {
          ...o,
          properties: {
            ...o.properties,
            ...fieldValue(o.properties.dname, dataObject),
          },
        };
      }),
    },
  };

  // return _.mapValues(districtshape.features, (o) => {
  //   return {
  //     ...o,
  //     properties: {
  //       ...o.properties,
  //       ...fieldValue(o.properties.dname, dataObject),
  //     },
  //   };
  // });
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

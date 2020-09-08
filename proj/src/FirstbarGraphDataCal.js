import {
    stringJsonToJsonObj,
    dataToJSONObject,
    stringToInterger,
    range
  } from "./util";
  import data from "./sample.json";

function FirstbarGraphDataCal() {
    const dataObject = dataToJSONObject(data);
    const sumf1 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f1_sum),
        0
      );
      const sumf2 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f2_sum),
        0
      );
      const sumf3 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f3_sum),
        0
      );
      const sumf4 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f4_sum),
        0
      );
      const sumf5 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f5_sum),
        0
      );
      const sumf6 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f6_sum),
        0
      );
      const sumf7 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f7_sum),
        0
      );
      const sumf8 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f8_sum),
        0
      );
      const sumf9 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f9_sum),
        0
      );
      const sumf10 = dataObject.reduce(
        (sum, i) => sum + stringToInterger(i.f10_sum),
        0
      );
      const sumAll = [sumf1,sumf2,sumf3,sumf4,sumf5,sumf6,sumf7,sumf8,sumf9,sumf10]

      return (sumAll)

     

}
export default FirstbarGraphDataCal


  
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

export { stringJsonToJsonObj, dataToJSONObject };

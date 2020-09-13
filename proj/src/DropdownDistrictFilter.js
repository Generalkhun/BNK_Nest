// import faker from 'faker'
// mport _ from 'lodash'
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { dataToJSONObject } from "./util";
import data from "./sample.json";

console.log("test");
const dataObject = dataToJSONObject(data);

// const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

const DropdownDistrictFilter = (props) => (
  <Dropdown
    onChange = {(e,d) => {props.setTagDistrictFilter(d.value)}}
    placeholder="สำนักงานเขต"
    search
    selection
    options={dataObject.map((c, index) => ({
      key: index,
      text: c.name,
      value: c.name
    }))}
  />
);

export default DropdownDistrictFilter;

import React from "react";
import { Dropdown } from "semantic-ui-react";
import { category2 } from "./util";

// const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

const DropdownNonSepDistrict = (props) => (
  <Dropdown
    onChange = {(e,d) => {props.setTagNonSepDistrict(d.value)}}
    placeholder="สำนักกลาง"
    search
    selection
    options={category2.map((c, index) => ({ key: index, text: c, value: c }))}
  />
);

export default DropdownNonSepDistrict;
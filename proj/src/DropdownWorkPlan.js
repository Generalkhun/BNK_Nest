import React from "react";
import { Dropdown } from "semantic-ui-react";
import { category } from "./util";

// const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

const DropdownWorkPlan = (props) => (
  <Dropdown
    onChange = {(e,d) => {props.setTagWorkplan(d.value)}}
    placeholder="แผนงาน (ของสำนักงานเขต)"
    search
    selection
    options={category.map((c, index) => ({ key: index, text: c, value: c }))}
  />
);

export default DropdownWorkPlan;

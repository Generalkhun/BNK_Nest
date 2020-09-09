import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import MapDistrict from "./MapDistrict.js";
import FirstBarChart from "./FirstBarChart.js";
import Page2 from "./Page2.js";
import "./index.css";
import SecondBarChart from "./SecondBarChart.js";
const FirstSidebar = ({
  page,
  setPage,
  visible,
  visibleP2,
  setVisible,
  setVisibleP2,
  districtSelected,
  setDistrictSelected,
}) => {
  const [filter, setFilter] = useState(0);
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={visible}
            width="wide"
          >
            <Menu.Item as="a" stylestyle={{ fontFamily: "Anakotmai" }}>
              <Icon name="money" />
              {page === "sepDis" ? (
                <p>"งบที่แยกตามเขต กทม. ปี 63"</p>
              ) : (
                <p>"งบที่ไม่แยกตามเขต"</p>
              )}
            </Menu.Item>
            {page === "sepDis" ? (
              <FirstBarChart filter={filter} setFilter={setFilter} />
            ) : (
              <SecondBarChart filter={filter} setFilter={setFilter} />
            )}
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="scale down"
            direction="right"
            inverted
            vertical
            visible={visibleP2}
            width="very wide"
          >
            <Menu.Item as="a" header>
              <Icon name="money" />
              {page === "sepDis" ? (
                <p>งบประมาณประจำสำนักงานเขต</p>
              ) : (
                <p>"งบประมาณในสำนัก:"</p>
              )}
            </Menu.Item>
            <Page2 districtSelected={districtSelected} />
          </Sidebar>

          <Sidebar.Pusher>
            <MapDistrict
              filter={filter}
              districtSelected={districtSelected}
              setDistrictSelected={setDistrictSelected}
              setVisibleP2={setVisibleP2}
              setVisible={setVisible}
              visibleP2={visibleP2}
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default FirstSidebar;

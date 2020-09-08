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
            <FirstBarChart filter={filter} setFilter={setFilter} />
            <Menu.Item as="a">
              <Icon
                name="home"
                onClick={() => {
                  setFilter(0);
                }}
              />
              {page}
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            inverted
            vertical
            visible={visibleP2}
            width="wide"
          >
            <Menu.Item as='a' header>
              File Permissions
            </Menu.Item>
            <Menu.Item as='a'>Share on Social</Menu.Item>
            <Menu.Item as='a'>Share by E-mail</Menu.Item>
            <Menu.Item as='a'>Edit Permissions</Menu.Item>
            <Menu.Item as='a'>Delete Permanently</Menu.Item>
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

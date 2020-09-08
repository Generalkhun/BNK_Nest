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

const FirstSidebar = ({ page, setPage, visible, setVisible }) => {
  const [filter, setFilter] = useState(1);
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
              <Icon name="home" />
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

          <Sidebar.Pusher>
            <MapDistrict filter={filter} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default FirstSidebar;

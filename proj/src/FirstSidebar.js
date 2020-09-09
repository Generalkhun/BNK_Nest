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
import Page2L2 from "./Page2L2.js";
import "./index.css";
import SecondBarChart from "./SecondBarChart.js";
import FeedExampleEventsProp from "./MockupFeed.js";
import CommentExampleComment from "./MockupComments.js";
import LeftSideForum from "./LeftSideForum.js";
import Topic from "./Topic.js";
import Page3 from "./Page3.js";
import Page4 from "./Page4.js";
const FirstSidebar = ({
  page,
  setPage,
  visible,
  visibleP2,
  setVisible,
  setVisibleP2,
  districtSelected,
  setDistrictSelected,
  setVisibleForum,
  visibleForum,
  visibleLeaderBoard,
  setVisibleLeaderBoard,
}) => {
  const [filter, setFilter] = useState(0);
  const [filter2, setFilter2] = useState(0);
  const [Mock1, setMock1] = useState(0);
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
                <p>"งบที่แยกตามเขต"</p>
              ) : (
                <p>"งบที่ไม่แยกตามเขต"</p>
              )}
            </Menu.Item>
            {page === "sepDis" ? (
              <FirstBarChart filter={filter} setFilter={setFilter} />
            ) : (
              <SecondBarChart
                filter={filter2}
                setFilter={setFilter2}
                page={page}
                setVisibleP2={setVisibleP2}
              />
            )}
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="overlay"
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
            {page === "sepDis" ? (
              <Page2
                districtSelected={districtSelected}
                setVisibleForum={setVisibleForum}
              />
            ) : (
              <Page2L2 districtSelected={districtSelected} filter2={filter2} />
            )}
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="overlay"
            direction="bottom"
            visible={visibleForum}
            width="wide"
          >
            <div style={{ height: 500, display: "flex", flexDirection: "row" }}>
              <Menu.Item as="a" header>
                <div>
                  <LeftSideForum />
                </div>
              </Menu.Item>
              <div>
                <Topic setMock1={setMock1} />
              </div>
              {Mock1 ? (
                <div>
                  <CommentExampleComment />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="overlay"
            direction="top"
            visible={visibleLeaderBoard}
            width="thin"
          >
            <Menu.Item as="a" header>
              <Page3 />
            </Menu.Item>
            <Menu.Item as="a" header>
              <Page4 />
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <MapDistrict
              page={page}
              filter={filter}
              filter2={filter2}
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

import React, { useState } from "react";
import { Feed } from "semantic-ui-react";
import "./index.css";
import { Label } from "semantic-ui-react";
import PostCard from "./PostCard.js";
import { ToastBody } from "react-bootstrap";

import DropdownDistrictFilter from "./DropdownDistrictFilter.js";
import DropdownWorkPlanFilter from "./DropdownWorkPlanFilter.js";
import DropdownNonSepDistrictFilter from "./DropdownNonSepDistrictFilter.js";

const image = {
  src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
};
const date = "3 days ago";
const summary = "Laura Faucet created a post";
const extraText =
  "Have you seen what's going on in Israel? Can you believe it.";
const Topic = ({ setMock1, firebase, dataForum }) => {
  // var dbCon = firebase.firebase.database().ref("/post");
  // dbCon.on("value", (c) => {
  //   console.log(c.val());
  // });
  const [postCardClicked, setPostCardClicked] = useState("");

  const [tagDistrictFilter, setTagDistrictFilter] = useState("");
  const [tagWorkPlanFilter, setTagWorkPlanFilter] = useState("");
  const [tagNonSepDistrictFilter, setTagNonSepDistrictFilter] = useState("");

  return (
    <div style={{ font: "Anakotmai" }}>
      <div style={{ marginTop: 50, paddingLeft: 30 }}>
        <h3>โพสทั้งหมด</h3>
        <p>กรองจากแท็ก</p>


        {/* insert filter */}
        <div>
          <DropdownDistrictFilter setTagDistrictFilter={setTagDistrictFilter} />
        </div>
        <div>
          <DropdownWorkPlanFilter setTagWorkPlanFilter={setTagWorkPlanFilter} />
        </div>

        <div>
          <DropdownNonSepDistrictFilter
            setTagNonSepDistrictFilter={setTagNonSepDistrictFilter}
          />
        </div>
      </div>

      {Array.isArray(dataForum) ? (
        dataForum
          .filter(
            (c) =>
            (
              c.tag[0] === tagDistrictFilter ||
              c.tag[1] === tagWorkPlanFilter

            )
               ||
              c.tag[2] === tagNonSepDistrictFilter
          )
          .map((aForum, index) => (
            <Feed>
              <div onClick={() => setMock1(aForum.uuid)}>
                <PostCard
                  key={index}
                  date={"Today"}
                  title={aForum.title}
                  content={aForum.content}
                  tagsDistrict={aForum.tag[0]}
                  tagsWorkPlan={aForum.tag[1]}
                  tagsNonDistrict={aForum.tag[2]}
                />
              </div>
            </Feed>
          ))
      ) : (
        <div>
          <h1>{dataForum}</h1>
        </div>
      )}
    </div>
  );
};

export default Topic;

import React, { useState } from "react";
import Profile from "./Profile.js";
import { Form, Button } from "semantic-ui-react";
import DropdownDistrict from "./DropdownDistrict.js";
import DropdownWorkPlan from "./DropdownWorkPlan.js";
import DropdownNonSepDistrict from "./DropdownNonSepDistrict.js"

const LeftSideForum = (firebase) => {
  const [displayName, setdisplayName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagDistrict, setTagDistrict] = useState("");
  const [tagWorkplan, setTagWorkplan] = useState("");
  const [tagNonSepDistrict, setTagNonSepDistrict] = useState("");

  const postTopic = () => {
    var dbCon = firebase.firebase.database().ref("/post");
    dbCon.push(
      {
        message: JSON.stringify({
          displayName: displayName,
          title: title,
          content: content,
          tag: [tagDistrict,tagWorkplan,tagNonSepDistrict],
        }),
      },
      () => {
        setContent("");
      }
    );
  };

  return (
    <div>
      <Profile />
      <Form.Field>
        <div style={{ paddingLeft: 1 }}>
          <p>ชื่อที่ใช้แสดงความเห็น</p>
        </div>
        <input
          value={displayName}
          onChange={(e) => setdisplayName(e.target.value)}
          placeholder="ชื่อ"
        />
      </Form.Field>

      <Form.Field>
        <div style={{ paddingLeft: 1 }}>
          <p>หัวข้อ</p>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="เขียนหัวข้อที่นี่..."
        />
      </Form.Field>

      <Form.Field>
        <div style={{ paddingLeft: 1 }}>
          <p>เนิ้อหา</p>
        </div>
        <Form reply>
          <Form.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form>
      </Form.Field>
      <label>เพิ่มแท็ก</label>
      <div>
        <DropdownDistrict setTagDistrict={setTagDistrict} />
      </div>

      <div>
        <DropdownWorkPlan setTagWorkplan={setTagWorkplan} />
      </div>

      <div>
        <DropdownNonSepDistrict setTagNonSepDistrict={setTagNonSepDistrict} />
      </div>

      <Button
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        primary
        onClick={() => {
          postTopic();
        }}
      />
    </div>
  );
};
export default LeftSideForum;

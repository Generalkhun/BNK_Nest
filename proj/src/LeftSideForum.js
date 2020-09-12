import React, { useState } from "react";
import Profile from "./Profile.js";
import { Form, Button } from "semantic-ui-react";

const LeftSideForum = (firebase) => {
  const [text, setText] = useState("");

  const postTopic = () => {
    var dbCon = firebase.firebase.database().ref("/post");
    dbCon.push(
      {
        message: JSON.stringify({ text: text, tag: ["เขตจตุจักร"] }),
      },
      () => {
        setText("");
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
        <input placeholder="ชื่อ" />
      </Form.Field>

      <Form.Field>
        <div style={{ paddingLeft: 1 }}>
          <p>หัวข้อ</p>
        </div>
        <input placeholder="เขียนหัวข้อที่นี่..." />
      </Form.Field>

      <Form.Field>
        <div style={{ paddingLeft: 1 }}>
          <p>เนิ้อหา</p>
        </div>
        <Form reply>
          <Form.TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => {
              postTopic();
            }}
          />
        </Form>
      </Form.Field>
    </div>
  );
};
export default LeftSideForum;

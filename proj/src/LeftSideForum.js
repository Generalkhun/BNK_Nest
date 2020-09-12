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
      <Form reply>
        <Form.TextArea onChange={(e) => setText(e.target.value)} value={text} />
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
    </div>
  );
};

export default LeftSideForum;

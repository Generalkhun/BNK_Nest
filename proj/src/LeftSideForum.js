import React, { useState } from "react";
import Profile from "./Profile.js";
import { Form, Button } from "semantic-ui-react";

function LeftSideForum(firebase) {
  const [text, setText] = useState("");

  const postTopic = () => {};

  return (
    <div>
      <Profile />
      <Form reply>
        <Form.TextArea onChange={(e) => setText(e.target.value)} />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </div>
  );
}

export default LeftSideForum;

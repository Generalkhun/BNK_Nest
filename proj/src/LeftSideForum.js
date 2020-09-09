import React from "react";
import Profile from "./Profile.js";
import { Form, Button } from "semantic-ui-react";

function LeftSideForum() {
  return (
    <div>
      <Profile />
      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </div>
  );
}

export default LeftSideForum;

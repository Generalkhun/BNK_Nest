import React from "react";
import Profile from "./Profile.js";
import { Form, Button } from "semantic-ui-react";
import firebase from './Firebase.js'

firebase.firestore().collection("posts").add({
  title: "ทำไมงบจำกัดขยะถึงสูงขนานี้",
  content:"ปีที่แล้วยังไม่มีเลย"
})

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

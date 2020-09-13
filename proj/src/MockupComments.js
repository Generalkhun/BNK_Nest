import React, { useState } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
const CommentExampleComment = ({ firebase, dataComment, mock1 }) => {
  const [mock, setMock] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const postComment = () => {
    var dbCon = firebase.database().ref("/comment");
    dbCon.push(
      {
        message: JSON.stringify({
          topicId: mock1,
          displayName: "name",
          content: text,
        }),
      },
      () => {
        setText("");
      }
    );
  };

  return (
    <div style={{ marginTop: 50, height: 400, overflow: "auto", width: 500 }}>
      <Header as="h3" dividing>
        Comments
      </Header>
      {dataComment
        .filter((c) => c.topicId == mock1)
        .reverse()
        .map((c) => (
          <div>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>
                  {" "}
                  <p>{c.content}</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </div>
        ))}

      {mock ? (
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">
              <h5>กรุงเทพ ในฝัน</h5>
            </Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>
              {" "}
              <p>{text}</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Upvote</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      ) : (
        <div></div>
      )}

      <Form reply>
        <Form.TextArea
          style={{ height: 90 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
          onClick={() => {
            postComment();
          }}
        />
      </Form>
    </div>
  );
};

export default CommentExampleComment;

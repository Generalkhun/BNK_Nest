import React from "react";
import { Feed } from "semantic-ui-react";
import "./index.css";
import { Label } from "semantic-ui-react";
const image = {
  src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
};
const date = "3 days ago";
const summary = "Laura Faucet created a post";
const extraText =
  "Have you seen what's going on in Israel? Can you believe it.";

const Topic = ({ setMock1, firebase }) => {
  // var dbCon = firebase.firebase.database().ref("/post");
  // dbCon.on("value", (c) => {
  //   console.log(c.val());
  // });
  return (
    <div style={{ font: "Anakotmai" }}>
      <div style={{ marginTop: 50, paddingLeft: 30 }}>
        <h3>POST</h3>
      </div>

      <Feed onClick={() => setMock1(1)}>
        <Feed.Event
          image={image}
          date={date}
          summary={
            <p>
              <b>งบทำความสะอาดเยอะ เอาไปทำอะไรหมดครับ</b>
            </p>
          }
          extraText={
            <p>
              ปีนึงเป็นร้อยล้าน แต่ไม่ได้คุณภาพเลย
              ดูเขตข้างๆงบน้อยกว่าก็สะอาดเท่านี้
            </p>
          }
        />
        <div style={{ paddingLeft: 50 }}>
          <Label as="a" color="red" tag>
            ทำความสะอาด
          </Label>
          <Label as="a" color="red" tag>
            จตุจักร
          </Label>
        </div>
        <Feed.Event>
          <Feed.Label image={image} />
          <Feed.Content
            date={date}
            summary={
              <p>
                <b>งบการศึกษาหายไป 10% จากปีที่แล้ว ขอเหตุผลด้วยค่ะ</b>
              </p>
            }
            extraText={<p>งบอื่นเพิ่มขึ้นหมดเลย ทำไมงบการศึกษาลดลงได้คะ</p>}
          />
        </Feed.Event>
        <div style={{ paddingLeft: 50 }}>
          <Label as="a" color="red" tag>
            การศึกษา
          </Label>
          <Label as="a" color="red" tag>
            จตุจักร
          </Label>
        </div>
      </Feed>
    </div>
  );
};

export default Topic;

import React, { Component } from "react";

import { TABLE, TH, TD } from "./Leaderboard_grid_style.js";
class Table2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: "ส.ส. ประยุทธ์ จันทรา",
          age: 21,
          upvote: 112,
          diff: "+44",
        },
        {
          id: 2,
          name: "ส.ส. สมเศียม จักร",
          age: 30,
          upvote: 1200000,
          diff: "-23",
        },
      ],
    };
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, upvote, diff } = student; //destructuring
      return (
        <tr key={id}>
          <TD>{name}</TD>
          <TD>{age}</TD>
          <TD>{upvote}</TD>
          <TD>{diff}</TD>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 id="title">Leaderboard</h1>

        <TABLE>
          <tbody>
            <tr>
              <TH>ชื่อ</TH>
              <TH>จำนวนกระทู้</TH>
              <TH>จำนวนดาว</TH>
              <TH>อันดับเพิ่ม-ลด</TH>
            </tr>
            {this.renderTableData()}
          </tbody>
        </TABLE>
      </div>
    );
  }
}

export default Table2;

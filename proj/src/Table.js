import React, { Component } from "react";

import { TABLE, TH, TD } from "./Leaderboard_grid_style.js";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "กรุงเทพ ในฝัน", age: 21, upvote: 1300 , diff:"+10"},
        { id: 2, name: "สายป่านยาว ใจดี", age: 19, upvote: 940 , diff:"-23"},
        { id: 3, name: "มานพ สุดจิต", age: 16, upvote: 801,diff:"-2"},
        { id: 4, name: "หมายปอง เก้าอี้", age: 25, upvote: 734,diff:"+0"},
      ],
    };
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, upvote ,diff} = student; //destructuring
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

export default Table;

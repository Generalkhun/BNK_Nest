import React, { Component } from "react";

import { TABLE, TH, TD } from "./Leaderboard_grid_style.js";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
    };
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <TD>{id}</TD>
          <TD>{name}</TD>
          <TD>{age}</TD>
          <TD>{email}</TD>
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
              <TH>name</TH>
              <TH>comment</TH>
              <TH>upvote</TH>
              <TH>project</TH>
            </tr>
            {this.renderTableData()}
          </tbody>
        </TABLE>
      </div>
    );
  }
}

export default Table;

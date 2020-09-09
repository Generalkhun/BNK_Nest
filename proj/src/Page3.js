import React from "react";
import Table from "./Table.js";
import Paper from "@material-ui/core/Paper";
import { useStyles, Divspan8, Divspan4 } from "./Leaderboard_grid_style";

export default function Page3() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Divspan8>
          <Paper className={classes.paper}>
            <Table />
          </Paper>
        </Divspan8>
        {/* <Divspan4>
          <Paper className={classes.paper}>
            <h1>Filter</h1>
          </Paper>
        </Divspan4> */}
      </div>
    </div>
  );
}

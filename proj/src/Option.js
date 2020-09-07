import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: `'Kanit', sans-serif`,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Option({ setFilter }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.font} id="demo-simple-select-label">
          Filter
        </InputLabel>
        <Select
          className={classes.font}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem className={classes.font} value={1}>
            แผนงานบริหารงานปกครองและทะเบียน
          </MenuItem>
          <MenuItem className={classes.font} value={2}>
            แผนงานบริหารการคลัง
          </MenuItem>
          <MenuItem className={classes.font} value={3}>
            แผนงานรักษาความสะอาด
          </MenuItem>
          <MenuItem className={classes.font} value={4}>
            แผนงานรักษาความเป็นระเบียบเรียบร้อย
          </MenuItem>
          <MenuItem className={classes.font} value={5}>
            แผนงานการโยธา
          </MenuItem>
          <MenuItem className={classes.font} value={6}>
            แผนงานจัดการระบายน้ าและแก้ไขปัญหาน้ าท่วม
          </MenuItem>
          <MenuItem className={classes.font} value={7}>
            แผนงานพัฒนาสภาวะสิ่งแวดล้อม
          </MenuItem>
          <MenuItem className={classes.font} value={8}>
            แผนงานพัฒนาชุมชน
          </MenuItem>
          <MenuItem className={classes.font} value={9}>
            แผนงานอนามัยสิ่งแวดล้อม
          </MenuItem>
          <MenuItem className={classes.font} value={10}>
            แผนงานบริหารการศึกษา
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

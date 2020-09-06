import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
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
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>แผนงานบริหารงานปกครองและทะเบียน</MenuItem>
          <MenuItem value={2}>แผนงานบริหารการคลัง</MenuItem>
          <MenuItem value={3}>แผนงานรักษาความสะอาด</MenuItem>
          <MenuItem value={4}>แผนงานรักษาความเป็นระเบียบเรียบร้อย</MenuItem>
          <MenuItem value={5}>แผนงานการโยธา</MenuItem>
          <MenuItem value={6}>
            แผนงานจัดการระบายน้ าและแก้ไขปัญหาน้ าท่วม
          </MenuItem>
          <MenuItem value={7}>แผนงานพัฒนาสภาวะสิ่งแวดล้อม</MenuItem>
          <MenuItem value={8}>แผนงานพัฒนาชุมชน</MenuItem>
          <MenuItem value={9}>แผนงานอนามัยสิ่งแวดล้อม</MenuItem>
          <MenuItem value={10}>แผนงานบริหารการศึกษา</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

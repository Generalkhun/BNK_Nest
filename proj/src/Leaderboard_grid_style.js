import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Divspan8 = styled.div`
  grid-column-end: span 8;
`;
const Divspan4 = styled.div`
  grid-column-end: span 4;
`;

const TABLE = styled.table`
  text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
`;

const TH = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4caf50;
  color: white;
  border: 1px solid #ddd;
`;
const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export { useStyles, Divspan8, Divspan4, TABLE, TH, TD };

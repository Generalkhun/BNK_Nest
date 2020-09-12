import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { stringToInterger } from "./util.js";
const colors = [
  "#546E7A",
  "#33b2df",
  "#d4526e",
  "#13d8aa",
  "#A5978B",
  "#2b908f",
  "#f9a3a4",
  "#90ee7e",
  "#f48024",
  "#69d2e7",
];
function AccordianPage2L2TableData({ cat, data, index }) {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={index}
        style={{ backgroundColor: colors[index] }}
      >
        {cat && cat.split(["_"])[0]} {"บาท"}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Table striped bordered hover variant="dark">
          <tbody>
            {data[index].split("_").map((c, i) => {
              return (
                i > 0 &&
                /^[ก-ฮ]/.test(c) && (
                  <tr>
                    <td>{c}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Card>
  );
}

export default AccordianPage2L2TableData;

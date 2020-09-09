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
        {cat && cat.split(["_"])[0]}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            {/* <thead>
              <tr>
                <th>รายการ</th>
                <th>งบปี 62</th>
                <th>เพิ่ม-ลด</th>
                <th>งบปี 63 (ปัจจุบัน)</th>
                <th>เพิ่ม-ลด</th>
                <th>งบปี 64</th>
              </tr>
            </thead>
            <tbody>
              {data[`f${index + 1}_data_f`]
                .split("_")
                .map((c, indexContent) => {
                  let thisContent = c;
                  let thisContentName = thisContent.split(" ")[0];
                  let thisContentVal = thisContent.split(" ")[1];

                  if (c != [])
                    return (
                      <tr>
                        <td>{thisContentName}</td>
                        <td>{thisContentVal}</td>
                        <td style={{ color: "red" }}>{"-10%"}</td>
                        <td>{thisContentVal}</td>
                        <td style={{ color: "green" }}>{"+10%"}</td>
                        <td>{thisContentVal}</td>
                      </tr>
                    );
                })}
              <tr>
                <td>รวม</td>
                <td>{data[`f${index + 1}_sum`]}</td>
                <td style={{ color: "red" }}>{"-10%"}</td>
                <td>{data[`f${index + 1}_sum`]}</td>
                <td style={{ color: "green" }}>{"+10%"}</td>
                <td>{data[`f${index + 1}_sum`]}</td>
              </tr>
            </tbody> */}
          </Table>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AccordianPage2L2TableData;

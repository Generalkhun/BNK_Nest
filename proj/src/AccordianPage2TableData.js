import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";

function AccordianPage2TableData({ cat, data, index }) {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {cat}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>รายการ</th>
                <th>งบปี 62</th>
                <th>งบปี 63 (ปัจจุบัน)</th>
                <th>งบปี 64</th>
              </tr>
            </thead>
            <tbody>
             
            
          
          {data[`f${index + 1}_data_f`].split("_").map((c, indexContent) => {
              let thisContent = c 
              let thisContentName = thisContent.split(" ")[0]
              let thisContentVal = thisContent.split(" ")[1]

            return (
              <tr>
                <td>{thisContentName}</td>
                <td>{thisContentVal}</td>
                <td>{thisContentVal}</td>
                <td>{thisContentVal}</td>
              </tr>
            );
          })}
          </tbody>
          </Table>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AccordianPage2TableData;

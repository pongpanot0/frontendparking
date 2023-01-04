import React from "react";
import { Container, Card, Row } from "@nextui-org/react";
import Shopdashboard from "../components/Collasp/Setting/Shop/Shopdashboard";
import Shopgroup from "../components/Collasp/Setting/Shop/Shopgroup";

const shopshow = () => {
  return (
    <div>
      <Container fluid>
        <Card.Body>
          <Row justify="center" align="center">
           
              {" "}
              <Shopdashboard />
   
          </Row>
        </Card.Body>
      </Container>
    </div>
  );
};

export default shopshow;

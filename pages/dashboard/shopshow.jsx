import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";
import ShopCrad from "../components/Collasp/Setting/Shop/ShopCrad";

const shopshow = () => {
  return (
    <Container fluid>
        
      
        <Card.Body>
          <Row justify="center" align="center">
            <ShopCrad />
          </Row>
        </Card.Body>
   
    </Container>
  );
};

export default shopshow;

import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

import Collasp from "../components/Collasp/Collasp";
const setting = () => {
  return (
    <Container fluid>
      < >
        <Card.Body>
          <Row justify="center" align="center">
            <Collasp/>
          </Row>
        </Card.Body>
      </>
    </Container>
  );
};

export default setting;

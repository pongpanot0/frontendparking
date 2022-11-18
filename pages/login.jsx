import React from "react";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import Login from "./components/Login/Login";
const login = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Spacer y={5} />
          <Row justify="center" align="center">
            <Login />
          </Row>
          <Spacer y={5} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default login;

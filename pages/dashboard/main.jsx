import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";
import Login from "../components/Login/Login";
const Main = () => {
  const MockItem = ({ text }) => {
    return (
      <Card
        css={{
          h: "$24",
         
        }}
      >
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Container fluid>
      <Card >
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={4}>
                <MockItem text="1 of 3" />
              </Grid>
              <Grid xs={4}>
               
              </Grid>
              <Grid xs={4}>
                <MockItem text="3 of 3" />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;

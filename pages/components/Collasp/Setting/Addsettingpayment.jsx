import React from "react";
import {
  Grid,
  Card,
  Text,
  Container,
  Row,
  Input,
  Checkbox,
} from "@nextui-org/react";
const Addsettingpayment = () => {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
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
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={4}>
                <Input
                  width="100%"
                  label="ชั่วโมง"
                  underlined
                  placeholder="กรอกชั่วโมง"
                />
              </Grid>
              <Grid xs={4}>
                <Input
                  width="100%"
                  label="นาที"
                  underlined
                  placeholder="กรอกนาที"
                />
              </Grid>
              <Grid xs={4}>
                <Checkbox defaultSelected={true} size="xl">
                  เป็นต้นไป
                </Checkbox>
              </Grid>
              <Grid xs={4}>
                <Input
                  width="100%"
                  label="Full Name"
                  underlined
                  placeholder="Guillermo Rauch"
                />
              </Grid>
              <Grid xs={4}>
                <Input
                  width="100%"
                  label="Full Name"
                  underlined
                  placeholder="Guillermo Rauch"
                />
              </Grid>
              <Grid xs={4}>
                <Input
                  width="100%"
                  underlined
                  label="Full Name"
                  placeholder="Guillermo Rauch"
                />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Addsettingpayment;

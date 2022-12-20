import React from "react";
import jwt_decode from "jwt-decode";
import {
  Grid,
  Card,
  Text,
  Container,
  Row,
  Input,
  Checkbox,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { createSetting } from "../../../api/setting";
const Addsettingpayment = () => {

  const [payment_hourfist, setpayment_hourfist] = React.useState("");
  const [payment_minfirst, setpayment_minfirst] = React.useState("");
  const [payment_min, setpayment_min] = React.useState("");
  const [payment_hour, setpayment_hour] = React.useState("");
  const [payment_free, setpayment_free] = React.useState("");
  const [checked, setchecked] = React.useState(false);
  const onSubmit = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
   
    createSetting(
      payment_min,
      id.company_id,
      payment_free,
      checked,
      payment_hourfist,
      payment_minfirst,
      payment_hour
    )
      /*   axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/addsetting`, {
        payment_min: payment_min,
        company_id: company_id,
        payment_free: payment_free,
        payment_forward: checked,
        payment_hourfist: payment_hourfist,
        payment_minfirst: payment_minfirst,
        payment_hour: payment_hour,
      }) */
      .then((res) => {
    
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onCheck = (e) => {
    setchecked(!checked);

  };
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row justify="center" align="center">
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="ตั้งแต่ชั่วโมง"
                    underlined
                    type={"number"}
                    placeholder="กรอกชั่วโมง"
                    onChange={(e) => {
                      setpayment_hourfist(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="ตั้งแต่นาที"
                    underlined
                    type={"number"}
                    placeholder="กรอกนาที"
                    onChange={(e) => {
                      setpayment_minfirst(e.target.value);
                    }}
                  />
                </Grid>

                <Grid xs={4}>
                  <Input
                    width="100%"
                    label="จนถึงชั่วโมง"
                    underlined
                    type={"number"}
                    placeholder="กรอกชั่วโมง"
                    onChange={(e) => {
                      setpayment_hour(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={4}>
                  <Input
                    width="100%"
                    label="จนถึงนาที"
                    underlined
                    type={"number"}
                    placeholder="กรอกนาที"
                    onChange={(e) => {
                      setpayment_min(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={4}>
                  <Input
                    width="100%"
                    label="ราคา"
                    underlined
                    type={"number"}
                    placeholder="ราคา"
                    onChange={(e) => {
                      setpayment_free(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Checkbox
                    size="xl"
                    onChange={(e) => {
                      onCheck(e);
                    }}
                  >
                    เป็นต้นไป
                  </Checkbox>
                </Grid>
                <Grid xs={6}>
                  <Button
                    shadow
                    color="primary"
                    onClick={(e) => onSubmit(e.target.checked)}
                    style={{ width: "100%" }}
                  >
                    ตกลง
                  </Button>
                </Grid>
              </Grid.Container>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Addsettingpayment;

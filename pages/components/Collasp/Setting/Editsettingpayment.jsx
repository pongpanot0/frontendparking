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

import { createSetting, EditSetting, Getsettingid } from "../../../api/setting";
import useEffectOnce from "../../../Helpers/use-effect-once";
const Editsettingpayment = ({ editid }) => {
  const [payment_hourfist, setpayment_hourfist] = React.useState("");
  const [payment_minfirst, setpayment_minfirst] = React.useState("");
  const [payment_min, setpayment_min] = React.useState("");
  const [payment_hour, setpayment_hour] = React.useState("");
  const [payment_free, setpayment_free] = React.useState("");
  const [checked, setchecked] = React.useState(false);
  const [checked2, setchecked2] = React.useState('');
  const [payment_id, setpayment_id] = React.useState('');
  
  console.log(checked2)
  useEffectOnce(() => {
    getData();
  }, []);

  const getData = () => {
    Getsettingid(editid)
      .then((res) => {
        console.log(res.data.data)
        setpayment_hourfist(res.data.data[0].HFrom);
        setpayment_minfirst(res.data.data[0].MFrom);
        setpayment_hour(res.data.data[0].Hto);
        setpayment_min(res.data.data[0].Mto);
        setpayment_free(res.data.data[0].ValueCharge);
        setchecked2(res.data.data[0].IsForwordRate);
        setpayment_id(res.data.data[0].payment_id)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = () => {
    EditSetting(
      editid,
      payment_min,
      payment_free,
      checked,
      payment_hourfist,
      payment_minfirst,
      payment_hour,
      payment_id
    )
      .then((res) => {
        console.log(res);
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
                    value={payment_hourfist}
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
                    value={payment_minfirst}
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
                    value={payment_hour}
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
                    value={payment_min}
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
                    value={payment_free}
                    onChange={(e) => {
                      setpayment_free(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Checkbox
                    checked={checked2}
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

export default Editsettingpayment;

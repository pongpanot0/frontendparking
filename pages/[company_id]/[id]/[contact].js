import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { Container, Card, Row, Text, Grid, Button } from "@nextui-org/react";
import { getPromtpay } from "../../api/payment";
import prompt from "../../../Img/prompt.png";
import wallet from "../../../Img/wallet.png";
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/th";
const Payment = () => {
  const router = useRouter();
  const [date, setDate] = React.useState([]);
  const [qrcode, setQrcode] = React.useState([]);
  const { company_id } = router.query;
  const { id } = router.query;
  const { contact } = router.query;
  const [sum, setSum] = React.useState([]);
  const [end, setEnd] = React.useState([]);
  React.useEffect(() => {
    if (!id && !company_id && !contact && !sum) {
      return;
    }
    moment.locale("th");
    getdata();
  }, [id, company_id, contact, sum]);

  const getdata = async () => {
    await getPromtpay(id, company_id)
      .then((row) => {
        setQrcode(row.data.data);
        setDate(row.data.resbody[0]["parking_start"]);
        setSum(row.data.sum);
        setEnd(res.data.resbody[0]["parking_end"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ShowData = () => {
    if (contact == 1) {
      return (
        <>
          <Card>
            <Card.Body>
              <Row justify="center" align="center">
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
            
                   Promtpay
                    
                    </Text>
                  </Grid>
                  
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาเข้า {moment(date).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาออก {moment(end).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>

                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      ป้ายทะเบียน
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    {" "}
                    <Text size="$2xl" style={{ textAlign: "center" }}>
                      ค่าบริการ {sum}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12} alignContent="center">
                    <Image
                      src={prompt}
                      alt="Picture of the author"
                      width={500}
                      height={125}
                    />
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Image
                      src={qrcode}
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </Grid>
                </Grid.Container>
              </Row>
            </Card.Body>
          </Card>
        </>
      );
    }
    if (contact == 2) {
      return (
        <>
          <Card>
            <Card.Body>
              <Row justify="center" align="center">
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      Promtpay
                    </Text>
                  </Grid>
                 
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาเข้า {moment(date).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาออก {moment(end).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>

                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      ป้ายทะเบียน
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    {" "}
                    <Text size="$2xl" style={{ textAlign: "center" }}>
                      ค่าบริการ {sum}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12} alignContent="center">
                    <Image
                      src={prompt}
                      alt="Picture of the author"
                      width={500}
                      height={125}
                    />
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Image
                      src={qrcode}
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </Grid>
                </Grid.Container>
              </Row>
            </Card.Body>
          </Card>
        </>
      );
    }
    if (contact == 3) {
      return (
        <>
          <Card>
            <Card.Body>
              <Row justify="center" align="center">
                <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      TrueMoneyWallet
                    </Text>
                  </Grid>
                  
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาเข้า {moment(date).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      เวลาออก {moment(end).format("DD/MM/YYYY, HH:mm")}
                    </Text>
                  </Grid>

                  <Grid xs={12} sm={12}>
                    <Text size="$2xl" as={"p"} style={{ textAlign: "center" }}>
                      ป้ายทะเบียน
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    {" "}
                    <Text size="$2xl" style={{ textAlign: "center" }}>
                      ค่าบริการ {sum}
                    </Text>
                  </Grid>
                  <Grid xs={12} sm={12} alignContent="center">
                    {" "}
                    <Image
                      src={wallet}
                      alt="Picture of the author"
                      width={500}
                      height={150}
                    />
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <Image
                      src={qrcode}
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </Grid>
                
                </Grid.Container>
              </Row>
            </Card.Body>
          </Card>
        </>
      );
    }
  };
  return (
    <Container>
      <ShowData />
    </Container>
  );
};

export default Payment;

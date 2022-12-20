import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

import Line from "../components/Chart/Line";
import Area from "../components/Chart/Area";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../../components/language-switcher";
import { getTheme } from "../api/theme";
import Pie from "../components/Chart/Pie";
import { useSession } from "next-auth/react";
import useEffectOnce from "../Helpers/use-effect-once";

const Main = () => {

/*   useEffectOnce(() => {
    const token = localStorage.setItem('token',session.accessToken)
  }); */
 /*  const postToken = () =>{
    
  } */
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={6}>
                <Line />
              </Grid>
              <Grid xs={12} sm={6}>
                <Area />
              </Grid>
              <Grid xs={12} sm={6}>
                <Pie />
              </Grid>
              <Grid xs={12} sm={6}></Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;

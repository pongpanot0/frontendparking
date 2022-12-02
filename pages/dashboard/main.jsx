import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

import Line from "../components/Chart/Line";
import Area from "../components/Chart/Area";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../../components/language-switcher";

const Main = () => {
  const { t } = useTranslation("common");
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={4}>
                <Line />
              </Grid>
              <Grid xs={4}></Grid>
              <Grid xs={12} sm={4}>
                <Area />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;

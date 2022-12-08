import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

import Line from "../components/Chart/Line";
import Area from "../components/Chart/Area";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../../components/language-switcher";
import { getTheme } from "../api/theme";

const Main = () => {
  React.useEffect(() => {
    getData();
  }, []);
  const [primary, setPrimary] = React.useState("");
  const [error, setError] = React.useState("");
  const getData = () => {
    const id = localStorage.getItem("company_id");
    getTheme(id)
      .then((res) => {
        setPrimary(res.data.data[0].paimaryButton);
        setError(res.data.data[0].errorButton);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={6}>
                <Line primary={primary} />
              </Grid>
              <Grid xs={0}></Grid>
              <Grid xs={12} sm={6}>
                <Area primary={primary} />
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;

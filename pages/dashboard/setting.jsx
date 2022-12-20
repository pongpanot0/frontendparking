import React from "react";
import { Container, Card, Row, Text, Grid } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import Collasp from "../components/Collasp/Collasp";
const setting = () => {
  const { t } = useTranslation("common");
  return (
    <Container fluid>
      <>
        <Card.Body>
          <Row justify="center" align="center">
            <Collasp />
          </Row>
        </Card.Body>
      </>
    </Container>
  );
};

export default setting;

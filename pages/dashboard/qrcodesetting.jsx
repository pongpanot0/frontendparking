import React from 'react'
import { Container, Card, Row, Text } from "@nextui-org/react";
const qrcodesetting = () => {
  return (
    <Container fluid>
    <Card css={{ $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Row justify="center" align="center">
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            NextUI gives you the best developer experience with all the features
            you need for building beautiful and modern websites and
            applications.
          </Text>
        </Row>
      </Card.Body>
    </Card>
  </Container>
  )
}

export default qrcodesetting
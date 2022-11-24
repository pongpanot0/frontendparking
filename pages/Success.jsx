import React from "react";
import { Button, Card, Grid, Text } from "@nextui-org/react";
const Success = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Card>
          <Card.Body>
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <Text h2>ชำระเงินเสร็จสิ้น</Text>
              <Button style={{ width: "100%" }}>ปริ้นใบเสร็จ</Button>
            </div>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Success;

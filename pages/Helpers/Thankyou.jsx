import React from "react";
import { Button, Card, Grid, Text } from "@nextui-org/react";
const Thankyou = () => {
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
              <Text h2>ทำรายการสำเร็จ</Text>
            </div>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Thankyou;

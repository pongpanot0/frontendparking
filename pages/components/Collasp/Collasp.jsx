import React from "react";
import { Container, Card, Row, Text, Collapse, Grid } from "@nextui-org/react";
import { SunIcon } from "./SunIcon.jsx";
import { MoonIcon } from "./MoonIcon";
import { AnchorIcon } from "./AnchorIcon";
import Settingpaymeny from "./Setting/Settingpaymeny.jsx";
import Company from "./Setting/Company.jsx";

const Collasp = () => {
  return (
    <Container fluid style={{width:'100%'}}>
      <Card css={{ $$cardColor: "$colors$primary",width:'100%' }}>
        <Card.Body style={{width:'100%'}}>
          <Row justify="center" align="center" style={{width:'100%'}}>
            <Grid.Container fluid gap={2} style={{width:'100%'}}>
              <Grid style={{width:'100%'}}>
                <Collapse.Group shadow>
                  <Collapse title="CompanyEdit" arrowIcon={<AnchorIcon />}>
                    <Company />
                  </Collapse>
                  <Collapse title="Setting Payment" arrowIcon={<MoonIcon />}>
                    <Settingpaymeny />
                  </Collapse>
                  <Collapse title="Sun" arrowIcon={<SunIcon />}>
                    {/*       <Thankyou/> */}
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Collasp;

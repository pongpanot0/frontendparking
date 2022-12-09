import React from "react";
import { Container, Card, Row, Text, Collapse, Grid } from "@nextui-org/react";
import { SunIcon } from "./SunIcon.jsx";
import { MoonIcon } from "./MoonIcon";
import { AnchorIcon } from "./AnchorIcon";
import Settingpaymeny from "./Setting/Settingpaymeny.jsx";
import Company from "./Setting/Company.jsx";
import Thankyou from "../../Helpers/Thankyou";
import Settingways from "./Setting/Settingways.jsx";
import SettingwaysTable from "./Setting/SettingwaysTable.jsx";
import Thememeindex from "../Theme/Thememeindex.jsx";
import Kiossetting from "./Setting/Kiossetting.jsx";
import Camerasetting from "./Setting/camerasetting.jsx";
const Collasp = () => {
  return (
    <Container fluid style={{ width: "100%" }}>
      <Card css={{  width: "100%" }}>
        <Card.Body style={{ width: "100%" }}>
          <Row justify="center" align="center" style={{ width: "100%" }}>
            <Grid.Container fluid gap={2} style={{ width: "100%" }}>
              <Grid style={{ width: "100%" }}>
                <Collapse.Group shadow>
                  <Collapse title="CompanyEdit" arrowIcon={<AnchorIcon />}>
                    <Company />
                  </Collapse>
                  <Collapse title="Setting Payment" arrowIcon={<MoonIcon />}>
                    <Settingpaymeny />
                  </Collapse>
                  <Collapse
                    title="ตั้งค่า ช่องทางการชำระเงิน"
                    arrowIcon={<SunIcon />}
                  >
                    <SettingwaysTable />
                  </Collapse>
                  <Collapse title="ตั้งค่าธีมการใช้งาน" arrowIcon={<SunIcon />}>
                    <Thememeindex />
                  </Collapse>
                  <Collapse title="ตั้งค่าเครื่องKios" arrowIcon={<SunIcon />}>
                    <Kiossetting />
                  </Collapse>
                  <Collapse title="ตั้งค่ากล้อง" arrowIcon={<SunIcon />}>
                    <Camerasetting />
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

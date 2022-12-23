import React from "react";
import { Container, Card, Row, Text, Collapse, Grid } from "@nextui-org/react";
import { SunIcon } from "./SunIcon.jsx";
import { MoonIcon } from "./MoonIcon";
import { AnchorIcon } from "./AnchorIcon";
import Settingpaymeny from "./Setting/Settingpaymeny.jsx";
import Company from "./Setting/Company.jsx";
import Thankyou from "../../Helpers/Thankyou";
import Settingways from "./Setting/Settingways.jsx";
import { useTranslation } from "next-i18next";
import SettingwaysTable from "./Setting/SettingwaysTable.jsx";
import Thememeindex from "../Theme/Thememeindex.jsx";
import Kiossetting from "./Setting/Kiossetting.jsx";
import Camerasetting from "./Setting/camerasetting.jsx";
import Settingqrcode from "./Setting/Settingqrcode.jsx";
import ReactDOMServer from "react-dom/server";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
const Collasp = () => {
  const { t } = useTranslation("common");
  return (
    <Container fluid style={{ width: "100%" }}>
      <Card css={{ width: "100%" }}>
        <Card.Body style={{ width: "100%" }}>
          <Row justify="center" align="center" style={{ width: "100%" }}>
            <Grid.Container fluid gap={2} style={{ width: "100%" }}>
              <Grid style={{ width: "100%" }}>
                <Collapse.Group shadow>
                  <Collapse
                    title={t("SettingCompany")}
                    arrowIcon={<AnchorIcon />}
                  >
                    <Company />
                  </Collapse>
                  <Collapse title={t("Servicefee")} arrowIcon={<MoonIcon />}>
                    <Settingpaymeny />
                  </Collapse>
                  <Collapse
                    title={t("ServicefeeSetting")}
                    arrowIcon={<SunIcon />}
                  >
                    <SettingwaysTable />
                  </Collapse>
                  <Collapse title={t("ThemeSetting")} arrowIcon={<SunIcon />}>
                    <Thememeindex />
                  </Collapse>
                  <Collapse title={t("Kiossetting")} arrowIcon={<SunIcon />}>
                    <Kiossetting />
                  </Collapse>
                  <Collapse title={t("Camerasetting")} arrowIcon={<SunIcon />}>
                    <Camerasetting />
                  </Collapse>
                  <Collapse title={t("Settingqrcode")} arrowIcon={<SunIcon />}>
                    <Settingqrcode />
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

const html = ReactDOMServer.renderToStaticMarkup(
  <>
    <DndProvider backend={HTML5Backend}>
      <Settingqrcode />
    </DndProvider>
  </>
);

console.log(html.toString());

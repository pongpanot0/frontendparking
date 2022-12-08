import React from "react";
import { Container, Card, Row, Text } from "@nextui-org/react";
import ParkingTable from "../components/Parking/parkingTable";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import SumdataTable from "../components/Parking/SumdataTable";
const qrcodesetting = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="ParkingTable" value="1" />
                    <Tab label="สรุปรับจ่าย" value="2" />
              {/*       <Tab label="Item Three" value="3" /> */}
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {" "}
                  <ParkingTable />
                </TabPanel>
                <TabPanel value="2">
                  <SumdataTable />
                </TabPanel>
               {/*  <TabPanel value="3">Item Three</TabPanel> */}
              </TabContext>
            </Box>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default qrcodesetting;

import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ShopCrad from "./ShopCrad";
import Shopgroup from "./Shopgroup";

const Shopdashboard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext sx={{ width: "100%", typography: "body1" }} value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{ width: "100%", typography: "body1" }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="ShopCrad" value="1" />
              <Tab label="Shopgroup" value="2" />
              {/*    <Tab label="Item Three" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <ShopCrad />
          </TabPanel>
          <TabPanel value="2">
            <Shopgroup />
          </TabPanel>
          {/*  <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
};

export default Shopdashboard;

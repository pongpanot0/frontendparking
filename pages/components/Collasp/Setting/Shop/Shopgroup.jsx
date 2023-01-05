import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Shoptranfers from "./Shopgroup/Shoptranfers";
import Paper from "@mui/material/Paper";

import Shoptree from "./shoptree/Shoptree";

const Shopgroup = () => {


  return (
    <div>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Paper elevation={3} />
      
        <h4>กลุ่มส่วนลด</h4>
        <Shoptree />
      </Box>
    </div>
  );
};

export default Shopgroup;

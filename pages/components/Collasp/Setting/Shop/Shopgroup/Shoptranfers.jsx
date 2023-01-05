import { Transfer } from "antd";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import jwt_decode from "jwt-decode";
import { createShopgroup, getShopnull } from "../../../../../api/shop";
import FormControl from "@mui/material/FormControl";
import useEffectOnce from "../../../../../Helpers/use-effect-once";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { getEstamp } from "../../../../../api/estamp";
const Shoptranfers = ({ oncloce, chooseMessage }) => {
  const [device, setDevice] = React.useState([]);
  const mockData = device.map((row, i) => ({
    key: row._id,
    title: `${row.shopname}`,
    description: `${row.shopdetail}`,
  }));

  ///userTargetKey
  const initialTargetKeys2 = mockData
    .filter((item) => Number(item.key))
    .map((item) => item.key);
  const [targetKeys2, setTargetKeys2] = useState(initialTargetKeys2);

  const [selectedKeys2, setSelectedKeys2] = useState([]);

  useEffectOnce(() => {
    getData();
    getestamp();
  });
  const [estamp, setestamp] = useState([]);
  const getestamp = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getEstamp(id.company_id).then((res) => {
      setestamp(res.data.data);
    });
  };

  const [shopgroupname, setshopgroupname] = useState("");
  const [value, setValue] = useState([]);
  const Opst = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    createShopgroup(id.company_id, shopgroupname, targetKeys2, value)
      .then((res) => {
        chooseMessage();
        oncloce();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getShopnull(id.company_id).then((res) => {
      setDevice(res.data.data);
    });
  };
  const onChange2 = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys2(nextTargetKeys);
  };

  const onSelectChange2 = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys2([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const LoopCheck = () => {
    return (
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          multiple
          id="tags-filled"
          options={estamp}
          getOptionLabel={(option) => option.estamp_name}
          freeSolo
          fullWidth
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              variant="outlined"
              label="ใช้โค้ดอะไรได้บ้าง"
              placeholder="Search"
            />
          )}
        />
      </FormControl>
    );
  };
  const onScroll2 = (direction, e) => {};
  return (
    <div>
      <Box sx={{ width: 1200, color: "black" }}>
        <InputLabel htmlFor="Namegroup">กำหนดกลุ่มร้านค้า</InputLabel>
        <TextField
          fullWidth
          id="standard-basic"
          label="ชื่อร้านค้า"
          variant="standard"
          onChange={(e) => {
            setshopgroupname(e.target.value);
          }}
        />

        <br></br>
        <Transfer
          style={{ width: "100%" }}
          listStyle={{
            width: "100%",
            color: "black",
            opacity: "100%",
            fontWeight: "bold",
          }}
          dataSource={mockData}
          titles={["ชื่อสมาชิก", "สมาชิกที่เลือก"]}
          targetKeys={targetKeys2}
          selectedKeys={selectedKeys2}
          onChange={onChange2}
          onSelectChange={onSelectChange2}
          onScroll={onScroll2}
          render={(item) => item.title}
        />

        <br></br>
        <LoopCheck />
        <Button fullWidth variant="contained" onClick={(e) => Opst(e)}>
          Opst
        </Button>
      </Box>
    </div>
  );
};

export default Shoptranfers;

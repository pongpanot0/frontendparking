import React from "react";
import {
  Input,
  Spacer,
  Grid,
  Button,
  Checkbox,
  Tooltip,
  Text,
  Modal,
  Row,
} from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Addsettingpayment from "./Addsettingpayment";

const Settingpaymeny = () => {
  const [age, setAge] = React.useState("");
  const [inputFields, setInputFields] = React.useState([
    {
      productid: "",
      piece: "",
      plice: Number,
      total: "",
    },
  ]);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        productid: "",
        piece: "",
        plice: Number,
        total: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  return (
    <form action="/send-data-here" method="post">
      <Button
        color="primary"
        className="btn btn-outline-success "
        onClick={addInputField}
      >
        Add New
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                จอดรถตั้งแต่
              </TableCell>
              <TableCell align="center" colSpan={1}>
                เป็นต้นไป
              </TableCell>
              <TableCell align="center" colSpan={2}>
                ถึงไม่เกิน
              </TableCell>
              <TableCell align="center" colSpan={1}>
                ค่าจอดรถ
              </TableCell>

              <TableCell align="center" colSpan={3}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {inputFields.map((data, index) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Input
                      bordered
                      type={"number"}
                      labelPlaceholder="ชั่วโมง"
                      color="primary"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Input
                      bordered
                      labelPlaceholder="นาที"
                      type={"number"}
                      color="primary"
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Tooltip
                      content={"เลือกในกรณีที่เวลาเป็นต้นไป"}
                      color="primary"
                    >
                      <Checkbox
                        style={{ marginLeft: 5 }}
                        defaultSelected={false}
                        color="success"
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Input
                      bordered
                      type={"number"}
                      labelPlaceholder="ชั่วโมง"
                      color="primary"
                    />
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Input
                      bordered
                      labelPlaceholder="นาที"
                      type={"number"}
                      color="primary"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Input
                      bordered
                      type={"number"}
                      labelPlaceholder="ค่าจอดรถ"
                      color="primary"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Button color="primary" auto>
                      แก้ไข
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button color="error" auto>
                      ยกเลิก
                    </Button>
                  </TableCell>

                  {inputFields.length !== 1 ? (
                    <TableCell align="right">
                      <Button color="primary" onClick={removeInputFields}>
                        Remove
                      </Button>
                    </TableCell>
                  ) : (
                    ""
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
    </form>

    /*  <Grid.Container gap={4}>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Input bordered labelPlaceholder="primary" color="primary" />
      </Grid>
      <Grid>
        <Button color="gradient" shadow auto>
          Gradient
        </Button>
      </Grid>
    </Grid.Container> */
  );
};

export default Settingpaymeny;

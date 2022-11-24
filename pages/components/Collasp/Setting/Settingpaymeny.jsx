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

import Addsettingpayment from "./Addsettingpayment";
import { Getsetting } from "../../../api/setting";

const Settingpaymeny = () => {
  const [setting, setSetting] = React.useState([]);
  React.useEffect(() => {
    getset();
  }, []);
  const getset = () => {
    const company_id = localStorage.getItem("company_id");
    Getsetting(company_id)
      .then((res) => {
        setSetting(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  const ShowTable = () => {
    return setting.map((row) => {
      const Forward = () => {
        if (row.IsForwordRate == "true") {
          return (
            <>
              <TableCell component="th" scope="row">
                <Text h5>{""}</Text>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Text visible h5>
                  
                </Text>
              </TableCell>
            </>
          );
        }
        if (row.IsForwordRate == "false") {
          return (
            <>
              <TableCell component="th" scope="row">
                ถึงชั่วโมงที่ {""} {row.Hto}
              </TableCell>
              <TableCell align="right">
                ถึงนาทีที่ {""}
                {row.Mto}
              </TableCell>
            </>
          );
        }
      };
      return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            ชั่วโมงที่ {""} {row.HFrom}
          </TableCell>

          <TableCell align="right">นาทีที่ {row.MFrom}</TableCell>

          <TableCell align="center">
            <Checkbox
              isDisabled={true}
              style={{ marginLeft: 5 }}
              defaultSelected={row.IsForwordRate}
              color="success"
            />
          </TableCell>
          <Forward />
          <TableCell align="right"> {row.ValueCharge} บาท</TableCell>

          <TableCell align="right">
            <Button color="primary" auto>
              แก้ไข
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <Button
        color="primary"
        className="btn btn-outline-success "
        onClick={handler}
      >
        Add New
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="100%"
      >
        <Modal.Body>
          <Addsettingpayment />
        </Modal.Body>
      </Modal>
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

              <TableCell align="center" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ShowTable />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Settingpaymeny;

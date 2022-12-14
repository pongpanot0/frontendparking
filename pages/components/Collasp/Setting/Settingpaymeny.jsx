import React from "react";
import {
  Input,
  Spacer,
  Grid,
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
import Button from "@mui/material/Button";
import Addsettingpayment from "./Addsettingpayment";
import { Getsetting } from "../../../api/setting";
import jwt_decode from "jwt-decode";
import Editsettingpayment from "./Editsettingpayment";
const Settingpaymeny = () => {
  const [editid, setEditid] = React.useState("");
  const [setting, setSetting] = React.useState([]);
  const [visible2, setVisible2] = React.useState(false);
  const onEdit = (id) => {
    console.log(id);
    setEditid(id);
    setVisible2(true);
  };
  React.useEffect(() => {
    getset();
  }, []);
  const getset = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    Getsetting(id.company_id)
      .then((res) => {
        setSetting(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler2 = () => {
    setVisible2(false);
  };
  const closeHandler = () => {
    setVisible(false);
  };
  const ShowTable = () => {
    return setting.map((row) => {
      const Forward = () => {
        if (row.IsForwordRate == true) {
          return (
            <>
              <TableCell component="th" scope="row">
                <Text h5>{""}</Text>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Text visible h5></Text>
              </TableCell>
            </>
          );
        }
        if (row.IsForwordRate == false) {
          return (
            <>
              <TableCell component="th" scope="row">
                ??????????????????????????????????????? {""} {row.Hto}
              </TableCell>
              <TableCell align="right">
                ?????????????????????????????? {""}
                {row.Mto}
              </TableCell>
            </>
          );
        }
      };

      return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            ?????????????????????????????? {""} {row.HFrom}
          </TableCell>

          <TableCell align="right">????????????????????? {row.MFrom}</TableCell>

          <TableCell align="center">
            <Checkbox
              isDisabled={true}
              style={{ marginLeft: 5 }}
              defaultSelected={row.IsForwordRate}
              color="success"
            />
          </TableCell>
          <Forward />
          <TableCell align="right"> {row.ValueCharge} ?????????</TableCell>
          <TableCell align="right">
            <Button
              onClick={(e) => onEdit(row._id)}
              variant="contained"
              color="primary"
            >
              ???????????????
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <Button
        variant="contained"
        className="btn btn-outline-success "
        onClick={handler}
      >
        Add New
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible2}
        onClose={closeHandler2}
        width="100%"
      >
        <Modal.Body>
          <Editsettingpayment editid={editid} />
        </Modal.Body>
      </Modal>
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
                ????????????????????????????????????
              </TableCell>
              <TableCell align="center" colSpan={1}>
                ???????????????????????????
              </TableCell>
              <TableCell align="center" colSpan={2}>
                ??????????????????????????????
              </TableCell>
              <TableCell align="center" colSpan={1}>
                ????????????????????????
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

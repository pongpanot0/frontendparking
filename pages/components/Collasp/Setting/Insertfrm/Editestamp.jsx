import React from "react";
import {
  Grid,
  Card,
  Text,
  Container,
  Row,
  Input,
  Checkbox,
  Button,
  Dropdown,
} from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import jwt_decode from "jwt-decode";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {  editEstamp, getEstampid } from "../../../../api/estamp";
import useEffectOnce from "../../../../Helpers/use-effect-once";
const Editestamp = ({ id ,realid}) => {
    console.log({id,realid});
  const [estamp_name, setestamp_name] = React.useState("");
  const [estamp_total, setestamp_total] = React.useState("");
  const [value, setValue] = React.useState(null);
  useEffectOnce(()=>{
    getData()
  },[])
  const getData = () => {
    getEstampid(id).then((res)=>{
        console.log(res.data.data[0])
        setestamp_name(res.data.data[0].estamp_name)
        setestamp_total(res.data.data[0].estamp_total)
        setValue(res.data.data[0].expireAt)
    }).catch((err)=>{
        console.log(err)
    })
  }
  const onSubmit = () => {

    editEstamp(realid,id,estamp_name, estamp_total, value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row justify="center" align="center">
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <TextField
                    width="100%"
                    label="estamp_name"
                    underlined
                    fullWidth
                    value={estamp_name}
                    onChange={(e) => {
                      setestamp_name(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <TextField
                    width="100%"
                    label="ค่าส่วนลด"
                    underlined
                    type="number"
                    required
                    placeholder=""
                    fullWidth
                    value={estamp_total}
                    onChange={(e) => {
                      setestamp_total(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Basic example"
                      value={value}
                      fullWidth
                      style={{ width: "100%" }}
                      inputFormat={"DD-MM-YYYY"}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid xs={6}>
                  <Button
                    shadow
                    color="primary"
                    onClick={(e) => onSubmit(e)}
                    style={{ width: "100%" }}
                  >
                    ตกลง
                  </Button>
                </Grid>
              </Grid.Container>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Editestamp;

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
import { createEstamp } from "../../../../api/estamp";
const InsertEstamp = () => {
  const [estamp_total, setestamp_total] = React.useState("");
  const [value, setValue] = React.useState(null);
  const onSubmit = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    createEstamp(estamp_total, id.company_id, id.user_id, value)
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
                    label="ค่าส่วนลด"
                    underlined
                    required
                    placeholder=""
                    fullWidth
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
                      style={{width:'100%'}}
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

export default InsertEstamp;

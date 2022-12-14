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
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import { createChanel, getChanel } from "../../../api/setting";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import jwt_decode from "jwt-decode";
const Settingways = () => {
  const [chanel_payments_detail, setchanel_payments_detail] =
    React.useState("");
  const [chanel_payments_name, setchanel_payments_name] = React.useState("");
  const [chanel_payments_tax, setchanel_payments_tax] = React.useState("");

  const [chanel_id, setchanel_id] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    getChanel()
      .then((res) => {
        console.log(res.data.data);
        setchanel_id(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [age, setAge] = React.useState("");
  const onSubmit = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
   
    createChanel(
      id.company_id,
      chanel_payments_detail,
      chanel_payments_name,
      chanel_payments_tax,
      age
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const map = chanel_id.map((row) => {
    return <MenuItem value={row.chanel_id}>{row.chanel_name}</MenuItem>;
  });

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row justify="center" align="center">
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="???????????????????????????"
                    underlined
                    required
                    placeholder=""
                    onChange={(e) => {
                      setchanel_payments_name(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="?????????????????????????????????????????????????????????"
                    underlined
                    required
                    placeholder=""
                    onChange={(e) => {
                      setchanel_payments_detail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="?????????????????????????????????????????? ???????????? ?????????????????? PromptPay"
                    underlined
                    required
                    placeholder=""
                    onChange={(e) => {
                      setchanel_payments_tax(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      required
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      {map}
                    </Select>
                    <FormHelperText>?????????????????????????????????</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid xs={6}>
                  <Button
                    shadow
                    color="primary"
                    onClick={(e) => onSubmit(e)}
                    style={{ width: "100%" }}
                  >
                    ????????????
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

export default Settingways;

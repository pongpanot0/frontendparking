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
import {
  createChanel,
  editChanel,
  getChanel,
  getChanelPaymentsid,
} from "../../../api/setting";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import jwt_decode from "jwt-decode";
import useEffectOnce from "../../../Helpers/use-effect-once";
const Editways = ({ id }) => {
  const [chanel_payments_detail, setchanel_payments_detail] =
    React.useState("");
  const [chanel_payments_name, setchanel_payments_name] = React.useState("");
  const [chanel_payments_tax, setchanel_payments_tax] = React.useState("");
  const [chanel, setchanel] = React.useState("");
  const [chanel_id, setchanel_id] = React.useState([]);

  useEffectOnce(() => {
    getData();
    getDataid();
  }, []);
  const [age, setAge] = React.useState("");
  const getDataid = () => {
    getChanelPaymentsid(id)
      .then((res) => {
        setchanel_payments_detail(res.data.data[0].chanel_payments_detail);
        setchanel_payments_name(res.data.data[0].chanel_payments_name);
        setchanel_payments_tax(res.data.data[0].chanel_payments_tax);
        setchanel(res.data.data[0].chanel_id);
        setAge(res.data.data[0].chanel_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

  const onSubmit = () => {
    editChanel(
      id,
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
    return <MenuItem value={row._id}>{row.chanel_name}</MenuItem>;
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
                    label="ชื่อบัญชี"
                    underlined
                    required
                    value={chanel_payments_name}
                    placeholder=""
                    onChange={(e) => {
                      setchanel_payments_name(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="รายละเอียดเพิ่มเติม"
                    underlined
                    required
                    value={chanel_payments_detail}
                    placeholder=""
                    onChange={(e) => {
                      setchanel_payments_detail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    width="100%"
                    label="เลขบัญชีธนาคาร หรือ เลขที่ PromptPay"
                    underlined
                    required
                    value={chanel_payments_tax}
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
                      defaultValue={chanel}
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      {map}
                    </Select>
                    <FormHelperText>เลือกประเภท</FormHelperText>
                  </FormControl>
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

export default Editways;

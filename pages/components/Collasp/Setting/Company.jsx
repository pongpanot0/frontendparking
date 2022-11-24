import React from "react";
import axios from "axios";
import {
  Container,
  Card,
  Row,
  Text,
  Grid,
  Input,
  Button,
} from "@nextui-org/react";
import { settingCompany } from "../../../api/setting";
const Company = () => {
  const [company_name, setcompany_name] = React.useState("");
  const [company_prayerid, setcompany_prayerid] = React.useState("");
  console.log(company_name);
  React.useEffect(() => {
    getData();
  }, []);
  const [disabled, setDisabled] = React.useState(true);
  const onEdit = () => {
    setDisabled(!disabled);
  };
  const Edidata = () => {
    const company_id = localStorage.getItem("company_id");
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/company/update/${company_id}`, {
        company_name: company_name,
        company_prayerid: company_prayerid,
      })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    const company_id = localStorage.getItem("company_id");
    settingCompany(company_id)
      .then((res) => {
        setcompany_name(res.data.data[0].company_name);
        setcompany_prayerid(res.data.data[0].company_prayerid);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={6}>
                <Input
                  clearable
                  value={company_name}
                  label="company_name"
                  width="100%"
                  placeholder="Name"
                  onChange={(e) => {
                    setcompany_name(e.target.value);
                  }}
                  disabled={disabled}
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  clearable
                  value={company_prayerid}
                  label="company_prayerid"
                  width="100%"
                  onChange={(e) => {
                    setcompany_prayerid(e.target.value);
                  }}
                  placeholder="Name"
                  disabled={disabled}
                />
              </Grid>
              <Grid xs={6}>
                <Button
                  bordered
                  color="warning"
                  onPress={(e) => onEdit(e)}
                  shadow
                  auto
                  style={{ width: "100%" }}
                >
                  แก้ไข
                </Button>
              </Grid>
              <Grid xs={6}>
                <Button
                  onPress={(e) => Edidata(e)}
                  color="success"
                  shadow
                  auto
                  disabled={disabled}
                  style={{ width: "100%" }}
                >
                  ยืนยัน
                </Button>
              </Grid>
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Company;

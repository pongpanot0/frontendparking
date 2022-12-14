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
  Spacer,
} from "@nextui-org/react";
import {
  getImage,
  settingCompany,
  updateCompany,
  updatePic,
  uploadImg,
} from "../../../api/setting";
import jwt_decode from "jwt-decode";
const Company = () => {
  const [company_name, setcompany_name] = React.useState("");
  const [companyPic, setCompanyPic] = React.useState("");
  const [company_lots, setcompany_lots] = React.useState("");
  const [timeReamain, settimeReamain] = React.useState("");
  React.useEffect(() => {
    if (companyPic) {
      return;
    }
    getData();
  }, [companyPic]);
  const [disabled, setDisabled] = React.useState(true);
  const onEdit = () => {
    setDisabled(!disabled);
  };
  const [image, setImage] = React.useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCompanyPic(URL.createObjectURL(i));
    }
  };

  const upDatepic = async () => {
    const body = new FormData();
    body.append("photo", image);
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
   
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        updatePic(id.company_id, res.data).then((res) => {
          console.log(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Edidata = async () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
   

    updateCompany(id.company_id, company_name,company_lots, timeReamain)
      .then((res) => {
        console.log(res)
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
    console.log(id.company_id)
   
    settingCompany(id.company_id)
      .then((res) => {
        setcompany_name(res.data.data[0].company_name);
        setCompanyPic(
          `${process.env.NEXT_PUBLIC_API_URL}/display/${res.data.data[0].company_pic}`
        );
        setcompany_lots(res.data.data[0].company_lots);
        settimeReamain(res.data.data[0].timeReamain);
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
              <Grid xs={12}>
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
                <img src={companyPic} width="500" height="200"></img>
              </Grid>
              <Grid direction="column" xs={6}>
                <Input
                  clearable
                  label="UploadPic"
                  width="100%"
                  onChange={uploadToClient}
                  placeholder="Name"
                  type={"file"}
                  disabled={disabled}
                />

                <Input
                  clearable
                  value={company_lots}
                  label="company_lots"
                  width="100%"
                  placeholder="Name"
                  onChange={(e) => {
                    setcompany_lots(e.target.value);
                  }}
                  disabled={disabled}
                />
                <Input
                  clearable
                  value={timeReamain}
                  label="timeReamain"
                  width="100%"
                  placeholder="Name"
                  onChange={(e) => {
                    settimeReamain(e.target.value);
                  }}
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
                  ???????????????
                </Button>
              </Grid>
              <Grid xs={6} gap={2}>
                <Button
                  onPress={(e) => Edidata(e)}
                  color="success"
                  shadow
                  auto
                  disabled={disabled}
                  style={{ width: "100%" }}
                >
                  ??????????????????
                </Button>
                <Button
                  onPress={(e) => upDatepic(e)}
                  color="success"
                  shadow
                  auto
                  disabled={disabled}
                  style={{ width: "100%" }}
                >
                  ???????????????????????????????????? 
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

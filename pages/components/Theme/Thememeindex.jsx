import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { getTheme, postTheme } from "../../api/theme";
import { Button } from "@mui/material";
import jwt_decode from "jwt-decode";
const Thememeindex = () => {
  const [primary, setPrimary] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)
     
   
    getTheme(id.company_id).then((res) => {
      setPrimary(res.data.data[0].paimaryButton);
      setError(res.data.data[0].errorButton);
    });
  };
  const postData = () => {
    const token = localStorage.getItem("token");
    const id =jwt_decode(token)

    postTheme(id.company_id, primary, error, id.user_id).then((res) => {
      console.log(res.data.data);
    });
  };
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Standard"
              type="color"
              fullWidth
              value={primary}
              onChange={(e) => {
                setPrimary(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">SampleColors</Button>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Standard"
              type="color"
              value={error}
              fullWidth
              onChange={(e) => {
                setError(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button onClick={(e) => postData(e)}>Accept</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Thememeindex;

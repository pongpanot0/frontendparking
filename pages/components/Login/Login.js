import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { Button } from "@mui/material";
import Thankyou from "../../Helpers/Thankyou";
import Dialog from "@mui/material/Dialog";
import Error from "../../Helpers/Error";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user_name, setuser_name] = React.useState("");
  const [user_password, setuser_password] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      user_name: user_name,
      user_password: user_password,
      redirect: false,
    })
      .then((res) => {
        if (res.error !== "CredentialsSignin") {
          router.push("/");
        } else {
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (session) {
    return (
      <>
        คุณกำลัง ล็อกอินอยู่ {session.user.email}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Box component="form" autoComplete="off">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" />{" "}
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Error Text={"ยูสเซอร์เนมหรือรหัสผานผิดผลาด"} />
            </Dialog>

            <TextField
              fullWidth
              id="standard-basic"
              label="Username"
              variant="standard"
              required
              onChange={(e) => {
                setuser_name(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="standard"
              error
              type={"password"}
              required
              onChange={(e) => {
                setuser_password(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              fullWidth
              style={{ color: "black" }}
              onClick={(e) => onLogin(e)}
            >
              {" "}
              login
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
}

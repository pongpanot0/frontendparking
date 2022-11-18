import React from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
const Login = ({ providers }) => {
  const [user_name, setUser_name] = React.useState("");
  const [user_password, setUser_password] = React.useState("");
  console.log(user_name, user_password);
  const router = useRouter()
  const onSubmit = () => {
    axios
      .post("http://localhost:7301/login", {
        user_name: user_name,
        user_password: user_password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user_name", res.data.user[0].user_name);
        localStorage.setItem("user_surname", res.data.user[0].user_surname);
        localStorage.setItem("company_id", res.data.user[0].company_id);
        localStorage.setItem("organize_id", res.data.user[0].organize_id);
        router.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      {" "}
      <Input
        fullWidth
        color="primary"
        aria-label="1234"
        size="lg"
        placeholder="Email"
        id="user_name"
        onChange={(e) => {
          setUser_name(e.target.value);
        }}
        contentLeft={<Mail fill="currentColor" />}
      />
      <Spacer y={1} />
      <Input.Password
        fullWidth
        aria-label="1234"
        color="primary"
        size="lg"
        id="user_password"
        placeholder="Password"
        onChange={(e) => {
          setUser_password(e.target.value);
        }}
        contentLeft={<Password fill="currentColor" />}
      />
      <Spacer y={1} />
      <Button onPress={(e) => onSubmit(e)} style={{ width: "100%" }} fullWidth>
        Sign in
      </Button>
    </form>
  );
};

export default Login;

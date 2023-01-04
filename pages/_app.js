import "../styles/globals.css";
import "./Helpers/Help.scss";
import "./Helpers/DragCard.css";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./components/Sidebar";
import { SessionProvider, useSession, getSession } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import jwt_decode from "jwt-decode";
import { getTheme } from "./api/theme";
import { useRouter } from "next/router";
import Head from "next/head";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login"
      ? false
      : true && router.pathname === "/pay/[pay]/[payid]"
      ? false
      : true;
  const [paimary, setPrimary] = React.useState("#fffff");
  const [err, setError] = React.useState("#fffff");

  React.useEffect(() => {
    if (!paimary && !err) {
      return;
    }
    getdata();
  }, [paimary, err]);

  const getdata = async () => {
    if (router.pathname === "/login" && router.pathname === "/pay/[pay][payid]") {
      return;
    } else {
      getSession()
        .then( async (res) => {
       await  localStorage.setItem("token", res.accessToken);
          const token = localStorage.getItem("token");
          const company_id = jwt_decode(token);
          getTheme(company_id.company_id).then(async (res) => {
            setPrimary(res.data.data[0].paimaryButton);
            setError(res.data.data[0].errorButton);
          });
        })
        .catch((error) => {
          router.push("/login");
        });
    }
  };

  // 2. Call `createTheme` and pass your custom values

  const theme = createTheme({
    palette: {
      primary: {
        main: paimary,
        contrastText: "#FFFFFF",
      },
      error: {
        main: err,
      },
    },
  });
  return (
    <>
    <DndProvider backend={HTML5Backend}>
      <NextUIProvider>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            {showHeader && <Sidebar />}
            <Head>
              <title>Qrpayment</title>
            </Head>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </NextUIProvider>
      </DndProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

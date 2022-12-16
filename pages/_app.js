import "../styles/globals.css";
import "./Helpers/Help.scss";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import jwt_decode from "jwt-decode";
import { getTheme } from "./api/theme";
import { useRouter } from "next/router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const showHeader = router.pathname === "/login" ? false : true;

  const [paimary, setPrimary] = React.useState("#fffff");
  const [err, setError] = React.useState("#fffff");

  React.useEffect(() => {
    if (!paimary && !err) {
      return;
    }
    getdata();
  }, [paimary, err]);
  const getdata = async () => {
    const token = localStorage.getItem("token");
    const company_id = jwt_decode(token);
    if (router.pathname === "/login") {
      return;
    } else {
      await getTheme(company_id.company_id).then(async (res) => {
        setPrimary(res.data.data[0].paimaryButton);
        setError(res.data.data[0].errorButton);
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
    <SessionProvider session={session}>
      {" "}
      <DndProvider backend={HTML5Backend}>
        <NextUIProvider>
          <ThemeProvider theme={theme}>
            {showHeader && <Sidebar />}
            <Component {...pageProps} />
          </ThemeProvider>
        </NextUIProvider>
      </DndProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);

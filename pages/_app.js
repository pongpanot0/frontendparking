import "../styles/globals.css";
import "./Helpers/Help.scss";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { red, green, blue } from "@mui/material/colors";
import { createTheme ,ThemeProvider} from "@mui/material";

import { getTheme } from "./api/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [paimary, setPrimary] = React.useState("#fffff");
  const [err, setError] = React.useState("#fffff");

  React.useEffect(() => {
    if (!paimary && !err) {
      return;
    }
    getdata();
  }, [paimary, err]);
  const getdata = async () => {
    const company_id = localStorage.getItem("company_id");
    await getTheme(company_id).then(async (res) => {
      setPrimary(res.data.data[0].paimaryButton);
      setError(res.data.data[0].errorButton);
    });
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
      <NextUIProvider>
        <ThemeProvider theme={theme}>
          <Sidebar />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);

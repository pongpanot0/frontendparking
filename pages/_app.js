import "../styles/globals.css";
import "./Helpers/Help.scss";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "./components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <NextUIProvider>
          <Sidebar />
          <Component {...pageProps} />
        </NextUIProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);

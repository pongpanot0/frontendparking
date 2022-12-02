import React from "react";
import { Navbar, Button, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout/Layout";
import { AcmeLogo } from "./Layout/AcmeLogo";
import Link from "next/link";
import i18n from "../i18n";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/language-switcher";
const Sidebar = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "th"
  );

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
  /*   localStorage.getItem("lan"); */
  React.useEffect(() => {
    getLan();
  }, []);
  const [selected, setSelected] = React.useState("");
  const onChage = (e) => {
    localStorage.setItem("lan", e.currentKey);
    setSelected(e.currentKey);
  };

  const getLan = (e) => {
    const lan = localStorage.getItem("lan");
    setSelected(lan);
  };
  return (
    <div>
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
            <AcmeLogo />

            <Text
              as={Link}
              href="/dashboard/main"
              b
              color="inherit"
              hideIn="xs"
            >
              ACME
            </Text>
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn="xs">
            <Navbar.Link
              as={Link}
              enableCursorHighlight
              href="/dashboard/main"
              color="text"
            >
              Mainboard
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              enableCursorHighlight
              href="/dashboard/setting"
              color="text"
            >
              ตั้งค่าทั่วไป
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              enableCursorHighlight
              href="/dashboard/qrcodesetting"
              color="text"
            >
              รายงานการจอดรถ
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <Avatar
                size="lg"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                color="primary"
                bordered
              />
            </Navbar.Item>
            <LocaleSwitcher />
          </Navbar.Content>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </div>
  );
};

export default Sidebar;

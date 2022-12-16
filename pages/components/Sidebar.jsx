import React from "react";
import { Navbar, Button, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout/Layout";
import { AcmeLogo } from "./Layout/AcmeLogo";
import Link from "next/link";
import i18n from "../i18n";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/language-switcher";
import { getTheme } from "../api/theme";
import jwt_decode from "jwt-decode";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
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
    getColor();
  }, []);
  const [primary, setPrimary] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getColor = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getTheme(id.company_id).then((res) => {
      setPrimary(res.data.data[0].paimaryButton);
    });
  };
  const [selected, setSelected] = React.useState("");

  const getLan = (e) => {
    const lan = localStorage.getItem("lan");
    setSelected(lan);
  };
  return (
    <div>
      <Layout>
        <Navbar
          style={{ background: primary }}
          color="#9d0b0b"
          isBordered
          variant="sticky"
        >
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
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              color="primary"
              bordered
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{cursor:'pointer'}}
            />
            <Navbar.Item>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
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

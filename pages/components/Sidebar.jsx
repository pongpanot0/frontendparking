import React from "react";
import { Navbar, Button, Text } from "@nextui-org/react";
import { Layout } from "./Layout/Layout";
import { AcmeLogo } from "./Layout/AcmeLogo";
import Link from "next/link";
const Sidebar = () => {
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

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <AcmeLogo />
          <Text as={Link} href="/dashboard/main" b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight  hideIn="xs">
          <Navbar.Link as={Link} enableCursorHighlight href="/dashboard/main" color="text">
            Mainboard
          </Navbar.Link>
          <Navbar.Link as={Link} enableCursorHighlight href="/dashboard/setting" color="text">
            ตั้งค่าทั่วไป
          </Navbar.Link>
          <Navbar.Link as={Link} enableCursorHighlight href="/dashboard/qrcodesetting" color="text">
            ตั้งค่าQrcode
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
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
  );
};

export default Sidebar;

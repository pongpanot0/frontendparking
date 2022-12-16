import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import PublicIcon from "@mui/icons-material/Public";
export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 


  return (
    <>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <PublicIcon color="primary" />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {otherLocales?.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <span key={"locale-" + locale}>
              <Link
                style={{ color: "black" }}
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  {locale === "en"
                    ? "English"
                    : locale === "th"
                    ? "Thai"
                    : null}
                </MenuItem>
              </Link>
            </span>
          );
        })}
      </Menu>

      {/*    <span className="text-muted cursor-pointer">
        {otherLocales?.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <span key={"locale-" + locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                {locale === "en" ? "English" : locale === "th" ? "th" : null}
              </Link>
            </span>
          );
        })}
      </span> */}
    </>
  );
}

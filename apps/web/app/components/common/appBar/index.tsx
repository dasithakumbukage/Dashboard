"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { RiMenu3Fill } from "react-icons/ri";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MenuOptions } from "../menu/menuOption";
import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineSubscriptions, MdPayment } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

export const AppBar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href={"/user-details"} style={{ textDecoration: "none" }}>
          <div className={styles.iconDiv}>
            <FaUsersGear className={styles.userIcon} />
            <h6 className={styles.iconName}>User</h6>
          </div>
        </Link>
        <Link href={"/payment-details"} style={{ textDecoration: "none" }}>
          <div className={styles.iconDiv}>
            <MdPayment className={styles.userIcon} />
            <h6 className={styles.iconName}>Payment</h6>
          </div>
        </Link>

        <div className={styles.iconDiv}>
          <MdOutlineSubscriptions className={styles.userIcon} />
          <h6 className={styles.iconName}>Subscription</h6>
        </div>
        <div className={styles.iconDiv}>
          <TbReportSearch className={styles.userIcon} />
          <h6 className={styles.iconName}>Reports</h6>
        </div>
      </List>
    </Box>
  );

  return (
    <div className={styles.main}>
      <RiMenu3Fill
        className={styles.menuIcon}
        onClick={toggleDrawer("left", true)}
      />
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
};

import React, { useState } from "react";
import styles from "./index.module.css";
import TableWithFields from "../common/table";
import { Menu } from "../common/menu";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppBar } from "../common/appBar";

export const UserDetails = () => {
  const VISIBLE_FIELDS = ["name", "country", "dateCreated", "isAdmin", "View"];

  const CUSTOM_DATA = [
    {
      id: 1,
      name: "John",
      country: "USA",
      dateCreated: "2022-01-01",
      isAdmin: true,
      rating: 4.5,
      View: "Action",
    },
    {
      id: 2,
      name: "Jane",
      country: "Canada",
      dateCreated: "2022-02-01",
      isAdmin: false,
      rating: 3.8,
      View: "Action",
    },
    {
      id: 3,
      name: "Michael",
      country: "Germany",
      dateCreated: "2022-03-15",
      isAdmin: false,
      rating: 4.2,
      View: "Action",
    },
    {
      id: 4,
      name: "Emily",
      country: "UK",
      dateCreated: "2022-04-20",
      isAdmin: true,
      rating: 4.7,
      View: "Action",
    },
    {
      id: 5,
      name: "David",
      country: "Australia",
      dateCreated: "2022-05-10",
      isAdmin: false,
      rating: 3.9,
      View: "Action",
    },
  ];

  //  const { isAuthenticated, getPermission } = useKindeBrowserClient();
  //  const router = useRouter();
  //  console.log("isAuthenticated", isAuthenticated);

  //  if (!isAuthenticated) {
  //   console.log("isAuthenticated sdf", isAuthenticated);
  //    router.push("/api/auth/login");
  //    redirect("/api/auth/login");
  //  }

  return (
    <div className={styles.main}>
      <div className={styles.upperTopSection}>
        <AppBar />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.tableDiv}>
            <h3 className={styles.heading}>User Management</h3>
            <TableWithFields feilds={VISIBLE_FIELDS} data={CUSTOM_DATA} />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import styles from "./index.module.css";
import TableWithFields from "../common/table";
import { PaymentStatusOption } from "./statusOptions";
import { Menu } from "../common/menu";

export const Payment = () => {
  const VISIBLE_FIELDS = ["name", "country", "dateCreated", "isAdmin"];

  const CUSTOM_DATA = [
    {
      id: 1,
      name: "John",
      country: "USA",
      dateCreated: "2022-01-01",
      isAdmin: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane",
      country: "Canada",
      dateCreated: "2022-02-01",
      isAdmin: false,
      rating: 3.8,
    },
    {
      id: 3,
      name: "Michael",
      country: "Germany",
      dateCreated: "2022-03-15",
      isAdmin: false,
      rating: 4.2,
    },
    {
      id: 4,
      name: "Emily",
      country: "UK",
      dateCreated: "2022-04-20",
      isAdmin: true,
      rating: 4.7,
    },
    {
      id: 5,
      name: "David",
      country: "Australia",
      dateCreated: "2022-05-10",
      isAdmin: false,
      rating: 3.9,
    },
  ];

  const ORDER_STATUS_OPTIONS = [
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
    { value: "refunded", label: "Refunded" },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.tableDiv}>
          <h3 className={styles.heading}>Payment Management</h3>
          <PaymentStatusOption />
          <TableWithFields feilds={VISIBLE_FIELDS} data={CUSTOM_DATA} />
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FaUsersGear } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import Link from "next/link";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export const MenuOptions = () => {
  const { isAuthenticated, getPermission } = useKindeBrowserClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const requiredPermission = await getPermission("ask:user-management");

      if (isAuthenticated && requiredPermission?.isGranted) {
        console.log("Permission Granted");
        // Proceed with rendering or navigation
      } else if (isAuthenticated && !requiredPermission?.isGranted) {
        console.log("Permission Denied");
        router.push("/");
        // Handle permission denied scenario (e.g., redirect, show error message)
      }
    }

    fetchData();
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  return (
    <>
      {!loading && (
        <div className={styles.main}>
          <h3 className={styles.heading}>MANAGEMENT</h3>
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
            <h6 className={styles.iconName}>Payment</h6>
          </div>
          <div className={styles.iconDiv}>
            <TbReportSearch className={styles.userIcon} />
            <h6 className={styles.iconName}>Reports</h6>
          </div>

          {isAuthenticated && (
            <div className={styles.iconDiv}>
              <TbReportSearch className={styles.userIcon} />
              <h6 className={styles.iconName}>
                <LogoutLink>Logout</LogoutLink>
              </h6>
            </div>
          )}
        </div>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { UserDetails } from "../app/components/userdetails";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

export default function UserDetailsPage() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const router = useRouter();
  // if (!isAuthenticated) {
  //   redirect("/api/auth/login");
  // }

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/");
      console.log("Permission Denied 22", isAuthenticated);
      console.log("Permission Denied isLoading", isLoading);
    }
  }, [isAuthenticated, isLoading]);

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/users`);
        setData(response.data);
        console.log("data", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <UserDetails newData={data} />
    </>
  );
}

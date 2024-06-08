import React, { useEffect, useState } from "react";
import { Payment } from "../app/components/payment";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function PaymentDetails() {
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
  return (
    <>
      <Payment />
    </>
  );
}

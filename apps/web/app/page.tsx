import React, { useEffect } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { SignIn } from "./components/signinCustom";
import Signup from "./components/signupCustom";
import SignInPage from "../pages/sign-in";
import { Menu } from "./components/common/menu";
// import { useRouter } from "next/navigation";

export default async function Page() {
  // const router = useRouter();
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }


  return (
    <>
      {/* <Layout /> */}

      <LogoutLink>Logout</LogoutLink>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </>
  );
}

{
  /* <LogoutLink>Logout</LogoutLink>
    <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink> */
}
